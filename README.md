## Extrawest React App Starter

Simple boilerplate based on create-react-app with redux state management

### Project structure 
```text
react_app
├──  .env 
├──  .env.dist
├── jsconfig.json
├──  package.json
├──  yarn.lock
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── assets
    │  ├── images
    |  └── ... 
    ├── api
    │  ├── ...
    |  ├── ...
    |  └── index.js 
    ├── components
    |  ├── common
    |  |  ├── ...   
    |  |  └── ... 
    │  └── ...
    ├── hocs
    │ └── ...
    ├── hooks
    │ └── ...
    ├── i18n
    │ └── ...
    ├── layouts
    |   └── ...
    ├── pages
    │   └── ...
    ├── permissions
    │   └── ...
    ├── redux
    |   ├── ... 
    |   |   ├── actions
    |   |   |   └── index.js
    |   |   ├── reducers
    |   |   |   └── index.js
    |   |   └── types
    |   |       └── index.js
    |   ├── ... 
    |   |   ├── actions
    |   |   |   └── index.js
    |   |   ├── reducers
    |   |   |   └── index.js
    |   |   └── types
    |   |       └── index.js
    |   ├── store
    |   |  └── index.js
    │   └── index.js
    ├── routes
    |   ├── ... 
    |   ├── ... 
    │   └── index.js
    ├── theme
    │   └── index.js
    ├── utils
    |   ├── types
    |   |   └──...
    │   └── ...
    ├── App.js
    ├── index.js
    ├── setupTests.js 
    ├── serviceWorker.js 
    └── reportWebVitals.js 
 
```
* The **public** folder contains index.html file. Is the main file, that container root point in the DOM
* The **assets** folder contains assets, e.g images, etc
* The **api** folder contains API requests declarations
* The **components** folder contains common reusable widgets
* The **hocs** - contains High Order Components
* The **hooks** - contains hooks
* The **i18n** - contains languages json files
* The **layouts** folder contains common page layouts and parts of pages
* The **pages** folder contains all pages declaration
* The **permissions** folder contains declaration permission rules
* The **redux** folder contains redux state management (reducers, actions, types, store)
* The **routes** folder contains contains all file with the routes declarations in the app
* The **theme** folder container theme style configuration (color, typography) and initialize default theme for app
* The **utils** - this package contains all the constants files, util static methods and formats.
* The **`App.js`** - this file is the entry components in the app
* The **`index.js`** - this file is the entry point in the app. Declare React.DOM method 
* The **`setupTests.js`** - this file initialize test tools
* The **`serviceWorker.js`** - this file contains serviceworker declaration
* The **`reportWebVitals.js`** - this file contains vitals tools declaration

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!


See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
