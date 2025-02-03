import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkAuthStatus } from '../store/slices/authSlice';
import { signInWithGoogle } from '../services/auth/socialAuth';

export function useAuthState() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, loading: isLoading, error } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return {
    isLoading,
    isAuthenticated,
    error,
    signUp: (email: string, password: string) => dispatch(signUp(email, password)),
    signIn: (email: string, password: string) => dispatch(signIn(email, password)),
    signOut: () => dispatch(signOut()),
    // signInWithGoogle: () => dispatch(signInWithGoogle()),
    // signInWithApple: () => dispatch(signInWithApple()),
  };
} 

function signUp(email: string, password: string): any {
    throw new Error('Function not implemented.');
}
function signIn(email: string, password: string): any {
    throw new Error('Function not implemented.');
}

function signOut(): any {
    throw new Error('Function not implemented.');
}

