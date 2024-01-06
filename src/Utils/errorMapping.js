// Mapping of Firebase authentication error codes to user-friendly error messages
const errorMapping = {
    'auth/user-not-found': "Please enter a valid email address or sign up",
    'auth/wrong-password': "Incorrect credentials",
    'auth/email-already-in-use': "Email already in use",
    'auth/weak-password': "Password must be 6 or more characters long",
    'auth/unknown': "Please try again later"
};

// Exporting the errorMapping constant for use in other parts of the application
export default errorMapping;
