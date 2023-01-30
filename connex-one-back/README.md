# Instructions and details

I structured the project following as a wide the [clean code architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) where controllers belong to the interface layer and routes would belong to the framework layer

1. Run ```npm install``` to install all dependencies
2. Run ```npm start``` to initialize the server. Make sure it's running on PORT 3000 as this is the PORT the front-end application will be expecting
3. Run ```npm test``` to run unit tests
4. Test the API calls either with the front-end app or with a client based tool like Postman or curl

## What would you do if you had more time?
- Add husky to make sure I cannot commit and push unless the changes pass all tests and all lints
- Add Swagger OpenAPI definition so that you could quickly test the server in ```http://localhost:3000``` instead of having to use postman
- Add rate limitters for the API
- Use of Typescript (for time's sake I went with JS but I usally rather use TS)
- Use of [Snyk](https://snyk.io/), [SonarQube](https://www.sonarsource.com/products/sonarqube/) and Github actions to make sure that one a PR is created it passes all tests and SonarQube checks for any code inconsistencies or bad practices. Github actions would help with CI/CD pipeline.
- Add custom error messages and define them in the OpenAPI definition also for server failure (500) codes. 
- Mocking a client so that the tests don't need to use supertest to execute calls and being able to mock the request, response and next function in the middleware testing
- Testing of prometheus metrics endpoint
