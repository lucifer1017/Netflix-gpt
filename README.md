# Netflix GPT App
- Started with a Create React App
- Configured Tailwind Css into the App
- Header 
- Login Form
- Sign Up Form
- Form Validation
- useRef Hook
- Firebase Setup
- Deploying our app to production
- Implemented Signup/ Sign In functionality
- Created Redux Store with userSlice
- Implemented the signout feature
- BugFix: Signed up user displayName and photoURL update
- BugFix: If user is not logged in, redirect /browse page to login page and vice versa.
- Added harcoded values to constants file
- Registered TMDB API and got access token
- Got Data from TMDB API
- Created Movie slice
- Updated our Redux store with movies data
- Fetched Data for Trailer video
- Embedded YouTube video and used it with autoplay and mute
- Beautification of MainContainer with Tailwind
- Built SecondaryContainer
- Built Movie List and Movie Card
- Created Custom hooks for Data fetching and used them Inside Browse Page
- Beautification of Browse page using Tailwind



# Features 
- Login/Sign up
    - Sign in/Sign up form
    - Redirect to Browse Page
- Browse(only after authentication, otherwise redirect to login/signup page)
    - Search Bar
    - Header
    - Display movie/Main Movie
        - Trailer Running in Background
        - It's Title and Description
        - Movie Suggestions
            - Movie list 
                - Their Descriptions, Ratings etc.
- NetflixGPT
    - Search Bar
    - Movie Suggestions