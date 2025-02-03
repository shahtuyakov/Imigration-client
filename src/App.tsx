import React from 'react';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store } from './store';
import { AppNavigator } from './navigation/AppNavigator';
import { ErrorBoundary } from './components/error/ErrorBoundary';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ErrorBoundary>
          <AppNavigator />
        </ErrorBoundary>
      </SafeAreaProvider>
    </Provider>
  );
}