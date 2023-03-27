"use strict";
exports.__esModule = true;
exports.ImageList = void 0;
var useImageList_1 = require("../../hooks/useImageList");
var ImageCard_1 = require("../ImageCard");
var styles_1 = require("./styles");
exports.ImageList = function () {
    var _a = useImageList_1.useImageList(), photos = _a.photos, isLoading = _a.isLoading, error = _a.error, addNewPhoto = _a.addNewPhoto;
    return (React.createElement(styles_1.ImageListWrapper, null,
        error && React.createElement(styles_1.ErrMessage, null, error.message),
        isLoading ? (React.createElement("div", null, "Loading...")) : photos.length ? (photos.map(function (photo) { return (React.createElement(styles_1.ImageWrapper, { key: photo.id },
            React.createElement(ImageCard_1.ImageCard, { photo: photo }))); })) : null));
};
// TODO: CLEAR вынес в хук useImageList
// const [images, setPhotos] = useState<IPhoto[]>([]);
// const { isLoading, error } = useQuery(
//   'photos list',
//   () => UnsplashService.getAll(),
//   {
//     onSuccess: ({ data }) => {
//       setPhotos(data);
//     },
//     onError: (error: any) => {
//       alert(error.message);
//     },
//   },
// );
