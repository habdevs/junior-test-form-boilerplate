"use strict";
exports.__esModule = true;
exports.useImageCache = void 0;
var react_query_1 = require("react-query");
exports.useImageCache = function () {
    var data = react_query_1.useQuery('photos list').data;
    return data || [];
};
