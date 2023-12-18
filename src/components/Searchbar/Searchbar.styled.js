import styled from 'styled-components';
import { Field, Form as searchForm } from 'formik';

export const SearchBar = styled.header`
    top: 0;
    left: 0;
    position: sticky;
    z-index: 1100;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    padding-right: 24px;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    color: #fff;
    background-color: #3f51b5;
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled(searchForm)`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 450px;
    max-height: 44px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
`;

export const Button = styled.button`
    display: inline-flex;
    width: 44px;
    height: 44px;
    border: 0;
    opacity: 0.8;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    align-items: center;
    justify-content: center;

    &:hover {
        opacity: 1;
    }

    svg {
        stroke: #000;
        fill: #000;
        width: 24px;
        height: 24px;
    }
`;

export const Input = styled(Field)`
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: none;
    outline: none;
    padding-left: 8px;
    padding-right: 8px;

    &::placeholder {
        font: inherit;
        font-size: 18px;
    }
`;
