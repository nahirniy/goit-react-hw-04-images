import { Formik } from 'formik';
import { SearchBar, Button, Form, Input } from './Searchbar.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const Searchbar = ({ onSubmit }) => {
    const handleSubmit = ({ query }, action) => {
        if (!query) {
            return Notify.failure('You have to write something here for a successful search');
        }

        onSubmit(query);
        action.resetForm();
    };

    return (
        <SearchBar>
            <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
                <Form>
                    <Input name="query" type="text" placeholder="Search images and photos" />
                    <Button>
                        <BiSearchAlt />
                    </Button>
                </Form>
            </Formik>
        </SearchBar>
    );
};
