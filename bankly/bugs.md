1. User model, register class, we should not return the password for security reasons.
2. instead of repeating middleware on every route, we can call the middleware from the app.js
3. bug in auth js is we are calling jwt.decode method instead of verify. isn't actually checking the origin of the token.
4. in getAll return only basic info for route . also getAll should not accept username,password as a parameter
5. in getAll test, there should be an expectation that ensures the response body is correct. the route doc string said only basic info, username, first name, last name but method returned all information.
