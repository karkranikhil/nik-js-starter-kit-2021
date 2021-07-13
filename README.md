# nik-js-starter-kit-2021

## Benefits of Starter kit

- Reduce decision fatigue by standardizing a long list of agreed tools, patterns and practices

- Right thing becomes automatic

- Codifies the best practices learned

- Rapid feedback by quick testing, linting and compilation erros

- Automated checklist to avoid common mistakes




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
