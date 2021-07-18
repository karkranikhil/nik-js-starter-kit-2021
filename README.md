# nik-js-starter-kit-2021

## Benefits of Starter kit

- Reduce decision fatigue by standardizing a long list of agreed tools, patterns and practices

- Right thing becomes automatic

- Codifies the best practices learned

- Rapid feedback by quick testing, linting and compilation erros

- Automated checklist to avoid common mistakes

---

### Command to run our web server

**Development**
```
npm start
```

**Production**
```
npm run build
```

**Deployment**
```
npm run deploy
```
---

### Editors and configuration
We have the following options to choose from
- [x] Visual Studio Code
- [ ] WebStrom
- [ ] Brackets
- [ ] Atoms
- [ ] etc

We choose the editor based on the following points
1) Modern JavaScript Syntax support
 - Autocompletion
 - Report usnused/invalid imports
 - Automated Refactoring tool like rename or extract functions
2) Framework intelligence
 -like built-in node debugging
3) Built-in terminal
 - Having a terminal built in gives you a single window for everything
4) Rich plugins Ecosystem
5) Cost effective

---
### Automated Formating
- [ ] Prettier - it automatically format your code on save
- [x] EditorConfig - It helps you to maintain consistent coding styles between different editors and IDEs.

Note** - In `editorConfig` file we specify how editor should handle common settings like tabs vs spaces, indent size, line feeds, charsets and whitespaces.

** Plugin installed in vscode after adding the file  `.editorconfig` is mentioned below
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig

---
### Package Manager
We have the following options to choose from
- [x] npm
- [ ] Yarn
- [ ] Bower
- [ ] JSPM
- [ ] Jam
- [ ] volo

`npm` is the larget package manager in the workd with over 1 million packages.

---
### Security Scanning by npm
- Audits are built into npm that gives us the warning message if there is a known vulnerability in a package

```
npm audit --fix
```
---

### Development web server
We have the following options to choose from
- [x] Express
- [ ] http-server
- [ ] Webpack dev server
- [ ] Browsersync

We configure our webserver so it's aautomatically started as a part of our development process and open our application so we can review our results immedietly on browser.

We are choosing server that's focused on javascript local development, highly configurable and powerful

| http-server  	|  Express 	|   webpack dev server	|  Browsersync 	|
|---	|---	|---	|---	|
| Ultra-simple  	|  Comprehensive 	|   Built in to web server	|   Dedicated IP for sharing work on LAN	|
|  Single command serves current directory 	|  Highly Configurable 	|   Serves form memory	|  All interactions remain in sync 	|
|  No configuration 	|   Production gradeProduction grade	|  includes hot reloading 	|  Great for cross-device testing 	|
|  - 	|   Can run it everywhere	|   Integrate with gulp, webpack etc	|   -	|

---

### Sharing work with url
If you want to quickly share your work on the public web so your client can review your work in progress without paying anything

We have the following options to choose from
- [x] localtunnel
- [ ] ngrok
- [ ] Surge
- [ ] Vercel

| localtunnel  	|  ngrok 	| vercel  	|  Surge 	|
|---	|---	|---	|---	|
|  Easily share work on your local machine 	| Secure tunnel to your local machine  	|  quickly deploy Node.js to cloud 	|  Quickly host static files to public URL 	|
| npm install localtunnel -g	|  require additional setup to achive extra power 	|  Each time you deploy, you're assigned to a new unique URL 	|  Extreme simple, Surge publishes your static files to their services and then serves them to public url 	|
|  `npm install localtunnel -g`,  ` lt --port 3000 --subdomain nik` 	|   Sign up, `install ngrok`, install authtoken, start your app, ./ngrok http 80	|   `npm install -g vercel`, create start script, vercel	| `npm install -g surge`,  surge  	|


Surge and Vercel is permanent solution, you don't have to keep your machine open until people to see your work in progress but surge only supports static fiels.

* Vercel also support node js projects

Note** we are using localtunnel

```
npm install localtunnel -g
lt --port 3000 --subdomain nik
```
After running above command you will get the
url

----

### Automation tools
We have the following options to choose from
- [x] npm scripts
- [ ] Grunt
- [ ] Gulp

npm scripts are declared in the script section of your package.json file. With npm scripts you can directly leverage all the power of operating system command line.

npm scripts also offer convention based hooks for running other scripts before and after your scripts

---

### Transpiling

We have the following options to choose from
- [x] Babel
- [ ] TypeScript

* **babel**
- Write standardized JS
- Leverage full JS Ecosystem
- Use experimental features earlier
- No type defs, annotation required

* **typescript**

- Enhanced Automcomplete
- Enhanced readability
- Safer refactoring
- Additional non standard featires
- It has own complier but we can use babel to compile TypeScript


```
@babel/preset-env
```
This package is a smart preset that compiles our JS down to run in all recent browsers

---
#### Babel Configuration Styles

-- Using `.babelrc` --
* Most common approach in which we place this file at the root dorectory of the project
* not npm specific
* Easier to read since isolated

-- Using `package.json` --
* One less file in your project
* `"babel":{}` need to add this in package.json


```
  "targets":">0.25%, not dead"
```
above config tells babel, to support all browser used by more that .25% people that are still officially supported by their creator
---

### Modules formats
We have different type of modules formats
- [x] ES6 Modules
- [ ] CommonJS (CJS)
- [ ] UMD (Universal Module Definition)
- [ ] AMD (Asynchronous Module Definition)
- [ ] IIFE (Immediately-invoked function expressions)

* ES6 modules are standardized
* Cleaner, Easy to read, improved autocomplete
* intelligent refactoring
* Tree Shaking - dead code elimination
* Named imports and Default exports

CommonJS doesn't work in web browser aand so we need to bundle npm packages into a format that the browser can consume
---
### Bundling
We use bundler to package any JavaScript into a single file or seperate file.

We have different type of modules formats

- [x] Webpack
- [ ] Rollup
- [ ] Parcel
- [ ] Snowpack
- [ ] Browserify
---
* Webpack bundles more than just JS
* Webpack offers a huge ecosystem of loaders so you can easily so we can instruct webpack to intelligently handle html, CSS, Images, fonts, etc
* Webpack includes built in hot-reloading web server
* Webpack serve files from memory which speeds up the development builds and automatically updates
* code spliting

### Sourcemaps

Sourcemaps map the bundled, transpiled and minified code back to orignal source.

---
### Linting
Linters are so powerful that they can catch many errors at compile time.

* Linters programmatically enforce consistency and provide raapid feedbaack to catch error during development.
- Example - Curly braces position, trailing commas, Global variable, stop eval etc.

* Linter avoid mistakes like Overwriting functions, assignment in conditional, Extra parenthesis


We have the following options to choose from
- [x] Eslint
- [ ] JSLint
- [ ] JSHint

#### ESlint Decisions
- Config format
- WHich built in rules
- warning or errors
- Which plugins
- Use preset instead

**Config format**
- .eslintrc.js - export and object containing configuration
- .eslintrc.yaml - define configuration structure
- .eslintrc.yml - define configuration structure
- .eslintrc.json - define configuration structure in JSON format
- .eslintrc - deprecated
- package.json - create `eslintConfig` property in package.json

**warning vs erros**
- warning can continue development, caan be ignored
- erros breaks the build and can't be ignored


**eslint plugins**

https://github.com/dustinspecker/awesome-eslint

**Use a preset**

ESlint comes with lot of logical defaults that save you a lot of time. We can use an existing set of rules like airbnbs, xo etc

**`Note`**
ESLint doesn't watch files

`eslint-watch `is a npm packages that adds file waatch


**`Note`**
ESLint doesn't supports experimental feature for that we have to use `babel-eslint`

### Testing

- Unit testing focus on testing of single function or module in an automated fashion.
- Unit tests often asserts that a certain function return an expected value when past certain parameters
- Unit tests mock out external dependencies like APIs database calls, and fiile system interactions so the results are fast and deterministic

#### Unit Testing Decisions
- Framework
- Assertion Library
- Helper LIbraries
- Where to run test
- Where to places test
- When to run tests

*We have the following options to choose from Frameworks*
- [x] Mocha
- [ ] Mocha
- [ ] Jasmine
- [ ] QUnit
- [ ] Ava
- [ ] Jest

I aam using MOchaa because it's popular, mature, flexible and large ecosystem of support

*We have the following options to choose from Assertion library*
- [x] Chai
- [ ] Should.js
- [ ] expect

*We have the following options to choose from Helper library*
- [x] JSDOM - simulate the browser's DOM and also run DOM-related tests without a browser
- [ ] Cheerio - jQuery for Server
- [ ] expect

*Where to RUN TEST*
- [x] In-memory DOM - JSDOM (lightweight alternative to headless chrome)
- [ ] Browser - Karma, Testem
- [ ] Headless Browser - A browser that doesn't have a visible user interface

*Where to put test files*
- [x] Alongside - keep in same folder, Easy import, provides clear visibility
- [ ] Centeralized - Less confusion in src folder, too much path confusions

*Where should our Unit test run*
- [x] On Hit Save - Rapid feedback, Facilitates TDD, increase test visibility



### Continuous Integration

When your team commits code it's handy to confirm immediately that the commit works as expected when on another machine that's what a CI server is for.
- CI server catches the number of potentials mistakes like
  * Forgot to commit new files
  * forgot to update package.json
  * commit doesn't run cross platform
  * Node version conflicts
  * Bad merge
  * Didn't run tests
  * etc.

#### Continuous Integration Server
- Run automated build
- Run your tests
- Check code coverage
- Automated deployment

*We have the following options to choose*
- [x] Travis CI - Linux based
- [ ] Appveyor - Windows based
- [ ] Jenkins
- [ ] circle CI
- [ ] Semaphore
- [ ] SnapCI


Travis and Jenkins are the most popular solution but Travis is the hosted solution and with jenkins you have to host your CI server your own

#### HTTP Calls
Every Javascript application we build today makes HTTP Calls


*We have the following options to choose*
- [ ] http - Node
- [ ] request - Node
- [ ] XMLHttpRequest - Browser
- [ ] $.Ajax - Browser
- [x] Fetch - Browser
- [ ] isomorphic-fetch - run both on Node & Browser
- [ ] xhr - run both on Node & Browser
- [ ] Axios - run both on Node & Browser
- [ ] SuperAgent - run both on Node & Browser

#### Mocking HTTP Calls

It means that you can recieve consistently instantaneous responses.
- Helps in rapid prototyping
- Helps to keep the work up and running when services are down
- Work offline


*We have the following options to choose*
- [ ] Nock
- [ ] Static JSON
- [x] JSON server
- [ ] api-mock
- [x] JSON Schema faker

## Generate Random Data
 - faker.js
 - chance.js
 - randexp.js



## Demo App
- Directory structure and file naming
- Framework usafe
- Testing
- Mock API
- Automated deployment

## Production Build
- **Minification** to speed page loads
- **Sourcemaps** to support debugging in production
- **Dynamic HTML** to handle prooduction-specific concerns
- **Cache busting** to ensure user recieve latest code on deployment
- **Bundle splitting** to ensure users don't have to download the entire application when just part of changes
- **Error logging** to see bugs in productions


## Minification
- It is used to speed up the page load and save bandwidth
- Shortern varibale and function names
- removes comments
- removes whitespaces and new lines
- Dead code elimination/Tree shakig
- Debug via sourcemap

## Dynamic HTML
- Reference bundles automatically
- Handle dynamic bundle name
- inject production only resources

## Bundle Splitting
- Speed initial page load
- Avoid re-loading all libraries

## Cache Busting
This mean after someone downloads your javascript file they won't make another HTTP request for that file  up to one year

- Save HTTP requests
- force request for latest version

## Error logging
[x] track.js

TrackJS makes finding and fixing client-side errors simple.

choose logging serve based on the following points
- provide bettwe metadata like stack trace, previous action, custom api for enhanced tracking
- Notification & integration
- Analytics and filteriing
- pricing


## Seperate UI and API
1. Simple, low risk and ui only deploy
2. Seperate teams and sperates concerns
3. Scale back-end separately
4. UI hosting is cheap and handling is easy independently

## Cloud hosting

- [] AWS
- [ ] Azure
- [X] Heroku - Used for API
- [ ] Firebase
- [x] Surge - used for UI
- [ ] Netlify
- [ ] Heroku
