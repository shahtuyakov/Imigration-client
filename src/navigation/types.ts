export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
  };
  
  export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
  };
  
  export type MainTabParamList = {
    Home: undefined;
    Cases: undefined;
    News: undefined;
    Lawyers: undefined;
    Profile: undefined;
  };
  
  export type CaseStackParamList = {
    CaseList: undefined;
    CaseDetail: { caseId: string };
  };
  
  export type NewsStackParamList = {
    NewsList: undefined;
    NewsDetail: { newsId: string };
  };
  
  export type LawyerStackParamList = {
    LawyerList: undefined;
    LawyerDetail: { lawyerId: string };
    Booking: { lawyerId: string };
  };