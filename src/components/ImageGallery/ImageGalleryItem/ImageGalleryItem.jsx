import { Component } from 'react';
import { Image, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';

class Item extends Component {
    state = {
        modal: false,
    };

    openModal = () => {
        this.setState({ modal: true });
    };

    closeModal = e => {
        if (e.target.id === 'overlay' || e.key === 'Escape') {
            this.setState({ modal: false });
        }
    };

    render() {
        const { smallImage, largeImage, description } = this.props;
        const { modal } = this.state;
        const { openModal, closeModal } = this;

        return (
            <>
                <ImageItem>
                    <Image src={smallImage} loading="lazy" alt={description} onClick={openModal} />
                </ImageItem>
                {modal && (
                    <Modal URL={largeImage} alt={description} closeModal={closeModal} isOpen={modal} />
                )}
            </>
        );
    }
}

export default Item;
