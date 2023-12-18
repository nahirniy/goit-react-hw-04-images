import { List } from './ImageGallery.styled';
import Item from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
    return (
        <List>
            {images.map(({ id, tags, webformatURL, largeImageURL }) => {
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
