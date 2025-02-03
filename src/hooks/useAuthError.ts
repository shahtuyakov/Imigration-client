import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { clearError } from '../store/slices/authSlice';

export function useAuthError() {
  const dispatch = useDispatch();
  const error = useSelector((state: RootState) => state.auth.error);
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  return { error, loading };
}
