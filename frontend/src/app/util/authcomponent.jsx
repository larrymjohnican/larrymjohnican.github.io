// Import necessary libraries and services
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthenticationService } from '../services/authentication.service';

// Define the JwtInterceptor component
const JwtInterceptor = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    setIsLoggedIn(isLoggedIn);
  }, []);

  // Define the intercept function, which will be called for each HTTP request
  const intercept = (request, next) => {
    const isAuthAPI = false;

    if (request.url.startsWith('login') || request.url.startsWith('register')) {
      isAuthAPI = true;
    }

    if (isLoggedIn && !isAuthAPI) {
      const token = AuthenticationService.getToken();

      const authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });

      return next.handle(authReq);
    }

    return next.handle(request);
  };

  return intercept;
};

// Define the provider for the JwtInterceptor component
const AuthInterceptProvider = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = AuthenticationService.isLoggedIn();
    setIsLoggedIn(isLoggedIn);
  }, []);

  return { provide: 'HTTP_INTERCEPTORS', useClass: JwtInterceptor, multi: true };
};

export { JwtInterceptor, AuthInterceptProvider };
