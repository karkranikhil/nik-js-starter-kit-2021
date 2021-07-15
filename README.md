# nik-js-starter-kit-2021

## Benefits of Starter kit

- Reduce decision fatigue by standardizing a long list of agreed tools, patterns and practices

- Right thing becomes automatic

- Codifies the best practices learned

- Rapid feedback by quick testing, linting and compilation erros

- Automated checklist to avoid common mistakes


### Command to run our web server
```
node buildScripts/srcServer.js
```


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

### Automated Formating
- [ ] Prettier - it automatically format your code on save
- [x] EditorConfig - It helps you to maintain consistent coding styles between different editors and IDEs.

Note** - In `editorConfig` file we specify how editor should handle common settings like tabs vs spaces, indent size, line feeds, charsets and whitespaces.

** Plugin installed in vscode after adding the file  `.editorconfig` is mentioned below
VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig


### Package Manager
We have the following options to choose from
- [x] npm
- [ ] Yarn
- [ ] Bower
- [ ] JSPM
- [ ] Jam
- [ ] volo

`npm` is the larget package manager in the workd with over 1 million packages.
### Security Scanning by npm
- Audits are built into npm that gives us the warning message if there is a known vulnerability in a package

```
npm audit --fix
```

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


### Automation Options
We have the following options to choose from
- [x] npm scripts
- [ ] Grunt
- [ ] Gulp

npm scripts are declared in the script section of your package.json file. With npm scripts you can directly leverage all the power of operating system command line.

npm scripts also offer convention based hooks for running other scripts before and after your scripts
