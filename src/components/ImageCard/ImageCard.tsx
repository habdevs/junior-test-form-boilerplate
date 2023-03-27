import { Loader } from 'styled-icons/boxicons-regular';

import { useDeleteCard } from '../../hooks/useDeleteCard';
import { useGetPhotoById } from '../../hooks/useGetPhotoById';
import { IPhoto } from '../../services/unsplash.service';

import {
  ButtonContainer,
  CardContainer,
  DeleteButton,
  Description,
  Image,
  TitleDate,
} from './style';
// TODO: export
interface ImageCardProps {
  photo: IPhoto;
}

export const ImageCard: React.FC<ImageCardProps> = ({ photo }) => {
  const { isLoading, data } = useGetPhotoById(photo.id);
  const { mutate } = useDeleteCard();

  const handleDeleteClick = (id: string) => {
    mutate(id);
  };

  if (isLoading) {
    return <Loader>Loading...</Loader>;
  }

  if (!data) {
    return <div>Error: Could not fetch photo data</div>;
  }

  return (
    <CardContainer>
      <ButtonContainer>
        <DeleteButton onClick={() => handleDeleteClick(photo.id)} />
      </ButtonContainer>
      <>
        <Description>{photo.alt_description}</Description>
        <TitleDate>Дата добавления {photo.created_at}</TitleDate>
        <Image src={photo?.urls?.small} alt={photo?.alt_description} />
      </>
    </CardContainer>
  );
};
