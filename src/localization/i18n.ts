// src/localization/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Translation resources
const resources = {
  en: {
    translation: {
      auth: {
        signIn: 'Sign In',
        signUp: 'Sign Up',
        email: 'Email',
        password: 'Password',
        forgotPassword: 'Forgot Password?',
        googleSignIn: 'Continue with Google',
        appleSignIn: 'Continue with Apple',
      },
      common: {
        loading: 'Loading...',
        error: 'An error occurred',
        retry: 'Retry',
      },
      validation: {
        required: '{{field}} is required',
        email: 'Please enter a valid email',
        password: 'Password must be at least 8 characters',
      },
    },
  },
  es: {
    translation: {
      auth: {
        signIn: 'Iniciar Sesión',
        signUp: 'Registrarse',
        email: 'Correo electrónico',
        password: 'Contraseña',
        forgotPassword: '¿Olvidaste tu contraseña?',
        googleSignIn: 'Continuar con Google',
        appleSignIn: 'Continuar con Apple',
      },
      common: {
        loading: 'Cargando...',
        error: 'Ocurrió un error',
        retry: 'Reintentar',
      },
      validation: {
        required: '{{field}} es requerido',
        email: 'Por favor ingrese un correo válido',
        password: 'La contraseña debe tener al menos 8 caracteres',
      },
    },
  },
  ru: {
    translation: {
      auth: {
        signIn: 'Войти',
        signUp: 'Регистрация',
        email: 'Электронная почта',
        password: 'Пароль',
        forgotPassword: 'Забыли пароль?',
        googleSignIn: 'Продолжить с Google',
        appleSignIn: 'Продолжить с Apple',
      },
      common: {
        loading: 'Загрузка...',
        error: 'Произошла ошибка',
        retry: 'Повторить',
      },
      validation: {
        required: '{{field}} обязательно',
        email: 'Введите правильный email',
        password: 'Пароль должен быть не менее 8 символов',
      },
    },
  },
};

const LANGUAGE_KEY = '@language';

async function getStoredLanguage() {
  try {
    return await AsyncStorage.getItem(LANGUAGE_KEY) || 'en';
  } catch {
    return 'en';
  }
}

export async function setLanguage(language: string) {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
    await i18n.changeLanguage(language);
  } catch (error) {
    console.error('Error setting language:', error);
  }
}

export async function initializeI18n() {
  const language = await getStoredLanguage();

  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

  return i18n;
}

export default i18n;