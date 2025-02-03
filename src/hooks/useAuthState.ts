import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkAuthStatus } from '../store/slices/authSlice';

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
  };
} 