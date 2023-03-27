"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_query_1 = require("react-query");
var devtools_1 = require("react-query/devtools");
var components_1 = require("./components");
var Form_1 = require("./components/Form");
var queryClient = new react_query_1.QueryClient();
function App() {
    var photos = react_1.useState([])[0];
    return (React.createElement(react_query_1.QueryClientProvider, { client: queryClient },
        React.createElement(components_1.AppWrapper, null,
            React.createElement("header", null,
                React.createElement("h1", null, "Test Task Form")),
            React.createElement("main", null,
                React.createElement("section", null,
                    React.createElement(Form_1.Form, null),
                    React.createElement("br", null),
                    React.createElement(components_1.ImageList, { photos: photos })))),
        React.createElement(devtools_1.ReactQueryDevtools, { initialIsOpen: false })));
}
exports["default"] = App;
