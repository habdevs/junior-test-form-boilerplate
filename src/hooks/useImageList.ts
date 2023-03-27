import { useState } from 'react';
import { useQuery } from 'react-query';

import { IPhoto, UnsplashService } from '../services/unsplash.service';

export const useImageList = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);

  const { isLoading, error } = useQuery<IPhoto[]>(
    'photos list',
    () => UnsplashService.getAll().then(({ data }) => data),
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      onSuccess: (data) => {
        setPhotos(data);
      },
    },
  );

  const addNewPhoto = (photo: IPhoto) => {
    setPhotos((prevPhotos) => [...prevPhotos, photo]);
  };

  return {
    photos,
    isLoading,
    error,
    addNewPhoto,
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
