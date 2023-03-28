import { useImageList } from '../../hooks/useImageList';
import { IPhoto } from '../../services/unsplash.service';
import { ImageCard } from '../ImageCard';

import { ErrMessage, ImageListWrapper, ImageWrapper } from './styles';

export interface ImageListProps {
  images: IPhoto[];
}

export const ImageList: React.FC = () => {
  const { photos, isLoading, error, addNewPhoto } = useImageList();

  return (
    <ImageListWrapper>
      {error && <ErrMessage>{(error as any).message}</ErrMessage>}
      {isLoading ? (
        <div>Loading...</div>
      ) : photos.length ? (
        photos.map((photo) => (
          <ImageWrapper key={photo.id}>
            <ImageCard photo={photo} />
          </ImageWrapper>
        ))
      ) : null}
    </ImageListWrapper>
  );
};
