import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AuthScreenProps } from '../../navigation/types';
import { Button, Input, Text } from '../../components/common';
import { useAuthState } from '../../hooks/useAuthState';
import { useTranslation } from 'react-i18next';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

interface SignUpScreenProps extends AuthScreenProps<'SignUpScreen'> {}

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('auth:invalidEmail')
    .required('auth:emailRequired'),
  password: Yup.string()
    .min(8, 'auth:passwordMinLength')
    .required('auth:passwordRequired'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'auth:passwordsMustMatch')
    .required('auth:confirmPasswordRequired'),
});

const initialValues: SignUpFormValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
  const { signUp } = useAuthState();
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSignUp(values: SignUpFormValues) {
    try {
      setIsLoading(true);
      setError(null);
      await signUp(values.email, values.password);
      navigation.navigate('VerifyEmail', { email: values.email });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'auth:unknownError');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScrollView 
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text variant="h1" style={styles.title}>
        {t('auth:createAccount')}
      </Text>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSignUp}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }: FormikProps<SignUpFormValues>) => (
          <View style={styles.form}>
            <Input
              label={t('auth:email')}
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email ? t(errors.email) : undefined}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Input
              label={t('auth:password')}
              value={values.password}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password ? t(errors.password) : undefined}
              secureTextEntry
            />

            <Input
              label={t('auth:confirmPassword')}
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              error={touched.confirmPassword ? t(errors.confirmPassword) : undefined}
              secureTextEntry
            />

            {error && (
              <Text style={styles.error}>
                {t(error)}
              </Text>
            )}

            <Button
              onPress={handleSubmit}
              loading={isLoading}
              style={styles.button}
            >
              {t('auth:signUp')}
            </Button>

            <Button
              variant="text"
              onPress={() => navigation.navigate('Login')}
              style={styles.loginLink}
            >
              {t('auth:alreadyHaveAccount')}
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: spacing.lg,
    backgroundColor: colors.background.light,
  },
  title: {
    marginBottom: spacing.xxl,
    textAlign: 'center',
  },
  form: {
    gap: spacing.md,
  },
  error: {
    color: colors.error.light,
    textAlign: 'center',
  },
  button: {
    marginTop: spacing.lg,
  },
  loginLink: {
    marginTop: spacing.md,
  },
}); 