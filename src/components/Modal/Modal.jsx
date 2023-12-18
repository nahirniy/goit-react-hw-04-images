import { Component } from 'react';
import { Overlay, Popup } from './Modal.styled';

class Modal extends Component {
    componentDidMount() {
        const { isOpen, closeModal } = this.props;

        if (isOpen) {
            window.addEventListener('keydown', closeModal);
        }
    }

    componentWillUnmount() {
        const { closeModal } = this.props;
        window.removeEventListener('keydown', closeModal);
    }

    render() {
        const { URL, alt, closeModal } = this.props;

        return (
            <Overlay id="overlay" onClick={closeModal}>
                <Popup>
                    <img src={URL} alt={alt} />
                </Popup>
            </Overlay>
        );
    }
}

export default Modal;
