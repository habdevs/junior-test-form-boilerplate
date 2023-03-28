"use strict";
exports.__esModule = true;
exports.useGetPhotoById = void 0;
var react_query_1 = require("react-query");
var unsplash_service_1 = require("../services/unsplash.service");
exports.useGetPhotoById = function (id) {
    return react_query_1.useQuery(['photos list', id], function () {
        return unsplash_service_1.UnsplashService.getById(id).then(function (res) { return res.data; });
    });
};
