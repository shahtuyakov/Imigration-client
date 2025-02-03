import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
  };
  
  export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    EmailVerification: undefined;
  };
  
  export type AuthStackScreenProps<T extends keyof AuthStackParamList> = 
    NativeStackScreenProps<AuthStackParamList, T>;
  
  export type MainTabParamList = {
    News: undefined;
    Cases: undefined;
    Lawyers: undefined;
    Profile: undefined;
  };
  