# Doing Coursera's "React Basics"?

If you're getting "Uncaught TypeError: Cannot read properties of undefined (reading 'pathname')", try `import`ing `BrowserRouter as ` Router.

If you're getting "Uncaught TypeError: Cannot destructure property 'basename' of 'react__WEBPACK_IMPORTED_MODULE_0__.useContext(...)' as it is null.", try surrounding both `nav` _and_ `Routes` elements with `<Router></Router>`.
