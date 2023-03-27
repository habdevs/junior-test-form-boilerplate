"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useImageList = void 0;
var react_1 = require("react");
var react_query_1 = require("react-query");
var unsplash_service_1 = require("../services/unsplash.service");
exports.useImageList = function () {
    var _a = react_1.useState([]), photos = _a[0], setPhotos = _a[1];
    var _b = react_query_1.useQuery('photos list', function () { return unsplash_service_1.UnsplashService.getAll().then(function (_a) {
        var data = _a.data;
        return data;
    }); }, {
        staleTime: Infinity,
        cacheTime: Infinity,
        onSuccess: function (data) {
            setPhotos(data);
        }
    }), isLoading = _b.isLoading, error = _b.error;
    var addNewPhoto = function (photo) {
        setPhotos(function (prevPhotos) { return __spreadArrays(prevPhotos, [photo]); });
    };
    return {
        photos: photos,
        isLoading: isLoading,
        error: error,
        addNewPhoto: addNewPhoto
    };
};
// TODO: CLEAR хуTQueryFnData extends IPhoto[] = unknownPhoto[] = unknown ошибок
// export const useImageList = () => {
//   const [images, setPhotos] = useState<IPhoto[]>([]);
//   const { isLoading, error } = useQuery(
//     'photos list',
//     () => UnsplashService.getAll(),
//     {
//       onSuccess: ({ data }) => {
//         setPhotos(data);
//       },
//       onError: (error: any) => {
//         alert(error.message);
//       },
//     },
//   );
//   return {
//     images,
//     isLoading,
//     error,
//   };
// };
