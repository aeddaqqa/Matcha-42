import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const TextFieldStyled = styled(TextField)({
    '& label.Mui-focused': {
        color: '#DD2476',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#8A8A8A',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#8A8A8A',
        },
        '&:hover fieldset': {
            borderColor: '#8A8A8A',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#DD2476',
        },
    },
});
export const FormGroupStyle = styled.div`
    height: 80px;
    position: relative;
    margin-top: 10px;
    width: 50%;
    min-width: 250px;
`;

export const FormFieldStyle = styled.input`
    width: 100%;
    border: 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.placeholder};
    outline: 0;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.text};
    padding: 20px 0px;
    margin-top: 10px;
    padding-left: 10px;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
        color: transparent;
    }

    &:placeholder-shown ~ label {
        font-size: 1rem;
        cursor: text;
        top: 20px;
    }
    &:focus {
        /* font-size: 1rem; */
        ~ label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 1rem;
            background-image: linear-gradient(
                45deg,
                ${(props) => props.theme.colors.primary},
                ${(props) => props.theme.colors.secondary}
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -moz-background-clip: text;
            -moz-text-fill-color: transparent;
            font-weight: 400;
            padding-bottom: 20px;
        }
        padding-bottom: 6px;
        font-weight: 400;
        border-width: 3px;
        border-image: linear-gradient(
            to right,
            ${(props) => props.theme.colors.primary},
            ${(props) => props.theme.colors.secondary}
        );
        border-image-slice: 1;
    }
    &:required,
    &:invalid {
        box-shadow: none;
    }
`;

export const FormLabelStyle = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: ${(props) => props.theme.colors.placeholder};
`;

export const FormStyle = styled.form`
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`;
