import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AuthResponse } from '../../services/auth/types';
import { signInWithGoogle, signInWithApple } from '../../services/auth/socialAuth';

interface AuthState {
  isAuthenticated: boolean;
  user: AuthResponse['user'] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const googleSignIn = createAsyncThunk(
  'auth/googleSignIn',
  async (_, { rejectWithValue }) => {
    try {
      return await signInWithGoogle();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const appleSignIn = createAsyncThunk(
  'auth/appleSignIn',
  async (_, { rejectWithValue }) => {
    try {
      return await signInWithApple();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Google Sign In
      .addCase(googleSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(googleSignIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(googleSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Apple Sign In
      .addCase(appleSignIn.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(appleSignIn.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = false;
      })
      .addCase(appleSignIn.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;