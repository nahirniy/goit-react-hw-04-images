import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Container } from './App.styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from '../services/pixabay-api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix';

const STATUS = {
    IDLE: 'idle',
    PENDING: 'pending',
    REJECTED: 'rejected',
    RESOLVED: 'resolved',
};

class App extends Component {
    state = {
        images: [],
        values: '',
        page: 1,
        status: STATUS.IDLE,
    };

    async componentDidUpdate(_, prevState) {
        const { images, values, page } = this.state;

        if (prevState.page !== page || prevState.values !== values) {
            await API.getImages(values, page)
                .then(({ hits, totalHits }) => {
                    this.setState({
                        images: [...images, ...hits],
                        status: Math.ceil(totalHits / 12) <= page ? STATUS.IDLE : STATUS.RESOLVED,
                    });
                })
                .catch(() => {
                    Notify.failure('Oops something went wrong! Try reloading the page');
                    this.setState({ status: STATUS.REJECTED });
                });
        }
    }

    updateValues = values => {
        this.setState({ images: [], values, page: 1, status: STATUS.PENDING });
    };

    updatePage = () => {
        this.setState(prevState => ({ page: prevState.page + 1, status: STATUS.PENDING }));
    };

    render() {
        const { updateValues, updatePage } = this;
        const { images, status } = this.state;

        return (
            <Container>
                <Searchbar onSubmit={updateValues} />
                <ImageGallery images={images} />
                {status === STATUS.RESOLVED && <Button handleClick={updatePage} />}
                {status === STATUS.PENDING && <Loader />}
            </Container>
        );
    }
}

export default App;
