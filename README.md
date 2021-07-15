# nik-js-starter-kit-2021

## Benefits of Starter kit

- Reduce decision fatigue by standardizing a long list of agreed tools, patterns and practices

- Right thing becomes automatic

- Codifies the best practices learned

- Rapid feedback by quick testing, linting and compilation erros

- Automated checklist to avoid common mistakes

---

### Command to run our web server
```
node buildScripts/srcServer.js
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
