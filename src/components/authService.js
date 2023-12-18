// authService.js
const authService = {
    isAuthenticated: false,
    login: async (username, password) => {
      // Simulate a login request to a backend
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (username === 'user' && password === 'password') {
            authService.isAuthenticated = true;
            resolve({ success: true });
          } else {
            authService.isAuthenticated = false;
            reject({ success: false, message: 'Invalid credentials' });
          }
        }, 1000);
      });
    },
    logout: () => {
      // Simulate a logout request
      authService.isAuthenticated = false;
    },
    signup: async (username, password) => {
      // Simulate a signup request to a backend
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          // Assume successful signup for simplicity
          resolve({ success: true });
        }, 1000);
      });
    },
  };
  
  export default authService;
  