# web_dev_template
A template repository for all my complex projects going forward
## Project Setup
### Features 
* Webpack configured for development and production
* CSS and image loaders
* ESLint + Prettier Integration for clean code
* Webpack dev server configured for hot reloads
* Organized folder structure
## Setup
1. Clone the template repository
`git@github.com:deniskibichiy/web_dev_template.git`
2. Install dependencies  
`npm install`
3. Run in development mode: start live server  
`npm run start`
* Hot reload available at http://localhost:8080
4. Build for production  
`npm run build`  
5. Prettier 
* Format code automatically with rules that include indentation, quotes, and semicolons for consistent code  
`npm run format` formats all files  
`npm format:check` checks formatting without changing files
6. ESLint
* identify and report on patterns found in ECMAScript/JS Code for consistency and avoiding bugs  
`npx eslint yourfile.js`
