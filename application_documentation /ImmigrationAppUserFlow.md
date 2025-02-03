stateDiagram-v2
    [*] --> SplashScreen: App Launch
    
    %% Initial Loading Flow
    SplashScreen --> LoadingState: Initialize App
    LoadingState --> AuthCheck: Load Complete
    LoadingState --> ErrorState: Load Failed
    ErrorState --> LoadingState: Retry

    %% Auth Check & Main Navigation
    AuthCheck --> BottomTabs: Auth Valid
    AuthCheck --> GuestTabs: No Auth
    
    %% Guest Navigation
    state GuestTabs {
        [*] --> GuestNews
        GuestNews --> LoginFlow: Protected Action
        GuestNews --> NewsDetail: Public Article
        
        state LoginFlow {
            [*] --> AuthOptions
            AuthOptions --> EmailLogin
            AuthOptions --> GoogleLogin
            AuthOptions --> AppleLogin
            EmailLogin --> VerifyEmail
            VerifyEmail --> AuthSuccess
            GoogleLogin --> AuthSuccess
            AppleLogin --> AuthSuccess
        }
    }

    %% Authenticated Navigation
    state BottomTabs {
        [*] --> NewsFeed
        
        %% News Module
        NewsFeed --> NewsDetail
        NewsDetail --> SaveArticle
        NewsDetail --> ShareArticle
        
        %% Case Module
        state CaseManagement {
            [*] --> CaseList
            CaseList --> CaseDetail
            CaseDetail --> Timeline
            CaseDetail --> Documents
            Documents --> UploadDoc
            CaseDetail --> Notes
            CaseDetail --> StatusUpdate
        }
        
        %% Lawyer Module
        state LawyerSystem {
            [*] --> LawyerList
            LawyerList --> LawyerProfile
            LawyerProfile --> Booking
            Booking --> Payment
            LawyerProfile --> Chat
            Chat --> VideoCall
        }
        
        %% Profile Module
        state ProfileSystem {
            [*] --> ProfileView
            ProfileView --> EditProfile
            ProfileView --> Settings
            Settings --> Language
            Settings --> Notifications
            Settings --> Security
            Security --> ChangePassword
            Security --> Enable2FA
        }
    }
    
    %% Global States
    state ErrorHandling {
        NetworkError --> RetryAction
        AuthError --> LoginFlow
        ValidationError --> RetryInput
    }

    %% Transitions
    AuthSuccess --> BottomTabs
    BottomTabs --> ErrorHandling: Error Occurs
    ErrorHandling --> BottomTabs: Resolved