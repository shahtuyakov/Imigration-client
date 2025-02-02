import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService, { AuthResponse } from '../../services/auth';

interface AuthState {
  user: AuthResponse['user'] | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }: { email: string; password: string }) => {
    return await AuthService.login(email, password);
  }
);

export const signup = createAsyncThunk(
  'auth/signup',
  async ({ email, password, role }: { email: string; password: string; role: string }) => {
    return await AuthService.signup(email, password, role);
  }
);

export const socialLogin = createAsyncThunk(
  'auth/socialLogin',
  async ({ provider, token }: { provider: 'google' | 'apple'; token: string }) => {
    return await AuthService.socialLogin(provider, token);
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      AuthService.logout();
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Login failed';
      })
      // Similar cases for signup and socialLogin
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state, action) => {
          state.loading = false;
          state.error = action.error.message || 'Operation failed';
        }
      );
  },
});

export const { logout, clearError } = authSlice.actions;
export default authSlice.reducer;