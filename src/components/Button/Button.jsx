import { Btn } from './Button.styled';

export const Button = ({ handleClick }) => {
    return <Btn onClick={handleClick}>Load more</Btn>;
};
