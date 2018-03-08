#TYP V3 Marketing Site#

##Getting started##

* npm install / yarn install

* yarn start - Start the development server. Access the site at http://localhost:3000
* yarn build - Build for production
* yarn serve - Test a production build locally

##React Static##

Check out their Github repo here: https://github.com/nozzle/react-static

##Development##

* yarn cz - run tests, lint, git add, git commit

Set up routes in static.config.js

Entry is from App.js

src > containers holds the separate pages

To use an image in a component, export it first via assets > index.js

##Testing##

After doing a Yarn install, or npm install, you should have access to Cypress.io.
Start a new testing environment with (NOTE: npx rather than npm):

* npx cypress open


