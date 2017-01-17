Just Giving Test

I made a single app application to display the latest donations for National Trust using ReactJS.
I initially installed the dependencies, then I set webpack instead of using react-create-app because is lighter and
gives me a better understand of what it's going on.
I decided to use webpack with the --watcher instead of webpack-dev-server.
The packege.json has 3 main scripts: test, start (dev mode) or build (creates the min version of the project)
As a test runner I used mocha and expect.
In order to run the app you need to provide your appId because mine is in my ENV.

To run the project:
```
$ npm install
$ npm start
```
then open the index.html in the browser.

TESTING:
In order to mock the fetch call I am using 'fetch-mock' api;

To run the test:
```
$ npm test
```

You can see the steps that I took by following the git log.

One more thing:
The API provided by Just Giving is in XML format, so I converted to Json using 'Content-Type' in the headers (see
Service/api.js)


