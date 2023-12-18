import { nanoid } from 'nanoid';
import { List } from './ImageGallery.styled';
import { Item } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(({ tags, webformatURL, largeImageURL }) => {
        const id = nanoid();

        return (
          <Item
            key={id}
            smallImage={webformatURL}
            largeImage={largeImageURL}
            description={tags}
          />
        );
      })}
    </List>
  );
};
