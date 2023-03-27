import { useQuery } from 'react-query';
import { AxiosResponse } from 'axios';

import { IPhoto, UnsplashService } from '../services/unsplash.service';

export const useGetPhotoById = (id: string) => {
  return useQuery<IPhoto, Error>(['photo', id], () => {
    return UnsplashService.getById(id).then(
      (res: AxiosResponse<IPhoto>) => res.data,
    );
  });
};
