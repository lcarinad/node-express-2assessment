Bug 1: User model, register class, we should not return the password for security reasons.
Bug 2: instead of repeating auth middleware on every route, we can call the middleware app.js
Bug 3: bug in auth js is we are calling jwt.decode method instead of verify. isn't actually checking the origin of the token.
Bug 4: in getAll return only basic info for route . also getAll method should not accept username,password as a parameter. in getAll test, there should be an expectation that ensures the response body is correct. the route doc string said only basic info, username, first name, last name but method returned all information.
Bug 5: BUG FOUND in user.js, get method, error was not being thrown. discovered by writing test for get route to see if 404 error would be thrown if user not found.
Bug 6: security threat to return users password. in user.update, i added delete user.password . updated test that expects password to be returned
Bug 7: 404 error not being thrown if user not found for /users/delete. this is happening bc user wasn't being returned

NICE FIXES TO HAVE

1. add middleware to check for corrUser or Admin
2. bcrypt work factor 12, not 10.
3. json schema to verify data
