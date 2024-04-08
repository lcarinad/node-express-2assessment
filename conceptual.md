### Conceptual Exercise

Answer the following questions below:

- What is a JWT?
  _A JWT stands for JSON Web Token and it is used to provide authentication by the server which then returns a token in JSON. JWTS can store a payload of information which are signed using a secret key so they can be validated later._

- What is the signature portion of the JWT? What does it do?
  _The signature is the header and payload, signed with the secret key and the purpose of the signature is to verify the origins or identify of the sender._

- If a JWT is intercepted, can the attacker see what's inside the payload?
  _Yes the attacker can see what's inside because a JWT is encoded, NOT encrypted. It's crucial to not include sensitive info in the jwt payload._
- How can you implement authentication with a JWT? Describe how it works at a high level.

1. When a user logs in with their credentials (username, and password) the server verifies the credentials. If they are valid, the server generates a JWT token for the user.
2. The server creates a JWT token containing relevant info about the user in the payload and signs it using a secret key. This is done with **jwt.sign** from the `jsonwebtoken` package.
3. The server sends the JWT token back to the client as part of the authentication resonse, usually in the response body or header.
4. The client stores the JWT commonly in local storage, session storage, or in cookies.
5. For requests the require authentication, the client includes the JWT token in the request, usually in the Authorization header as a Bearer token. The client is retrieving the JWT token from where it's stored (commonly is placed mentioned in previous step)
6. When the server receives a request with the JWT token, the server verifies the token's authenticity by checking its signature using the same secret key that was used to sign it. This ensures the token hasn't been tampered with.T his is done with **jwt.verify**
7. Once it's verified, teh server extracts the payload from the token to determine user's identify and permissions. Based on this, the server will grant or deny access to the requested resource.

- Compare and contrast unit, integration and end-to-end tests.
- _**Unit tests** assesses individual units or functions within an application and are typically isolated from the rest of the application. Because unit tests are done in isolation from the app, they often use **mocking** to replace external dependencies with controlled implementations._
- **Integration tests** are used to test groupings of functions For example, an integration test would be used to test a router function making an http request, which then calls a method from a class model which then grabs data from a database. The integration test ensures that all those components work together. In a unit test, you'd test each of those individual functions. **End to end tests** test the entire flow of an application from start to end. the purpose of E2E testing is to simulate an entire real user scenario.\*
- What is a mock? What are some things you would mock?
  _A mock is an object used to replace other objects and will simulate behaviors of objects that are impractical to incorporate in a test. Objects to mock are impure functions like Math.random, reading/writing to files, and AJAX requests._
- What is continuous integration?
  _Continuous integration is the practice of merging in small code changes frequently, rather than merging in a large change at the end of a development cycle. The goal is to build better software by developing and testing in smaller increments. CI will:-automate running your tests when pushing code -reject deployments if test do not pass -easily notify you when changes occur to test suite_
- What is an environment variable and what are they used for?
  _Enviroment variable are dynamic values that can be accessed by the application during runtime. They are useful for configuring the behavior of the application based on the environement in which it is deployed. For example, the application might need to use a different database server depending if you are running a testing enviornment, or production environment._
- What is TDD? What are some benefits and drawbacks?
  _TDD is test-driven-development. It is a process of writing code where you write tests first, then when the test passes, write the code. Benefits is it helps you think about expectations of code and help write modular code. A drawback of TDD is it slows down development up front._
- What is the value of using JSONSchema for validation?
  _The value of using JSONschema for validation is invalid data can fail before it gets to the database. It also reduces the amount of code for processing and validating data._
- What are some ways to decide which code to test?
  _We should test an api get requests to ensure data was created, updated, or deleted_
- What does `RETURNING` do in SQL? When would you use it?
  _Returning clause dictates what a 'UPDATE', or 'DELETE', or 'INSERT' statement should return. This is to return data that was for non-select statements._
- What are some differences between Web Sockets and HTTP?
  _HTTP is stateless and websockets are stateful, they stay connected. Because websockets are stateful, they are useful for realtime apps like chat apps, doordash, uber, any application that gives the user updates in real time. This is because there is persistent connection maintained between the client and server. HTTP does not have persistent connection, instead each request from client to server is independent and does not rely on previous requests, each request contains ALL the info necessary for the server to fulfill it. This is what makes HTTP stateless_
- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?
  _I preferred using Flask primarily because of my love for Python and its concise syntax. After experimenting with Express, I realized that Flask, despite being lightweight, provides a greater degree of flexibility due to its minimalistic approach. Express, on the other hand, while powerful, seemed to impose more structure and conventions than I was accustomed to with Flask. For instance, managing separate routers, configurations, and application files in Express felt more intricate compared to Flask's simpler setup. As I become more proficient with Express, I may come to appreciate its nuances and advantages, but for now, Flask remains my preferred choice for its simplicity and adaptability._
