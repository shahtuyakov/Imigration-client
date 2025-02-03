import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import RootNavigator from './navigation/RootNavigator';
import { initializeI18n } from './localization/i18n';

export default function App() {
  useEffect(() => {
    initializeI18n();
  }, []);

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}