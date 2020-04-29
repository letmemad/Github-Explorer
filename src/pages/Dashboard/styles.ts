import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
    hasError: boolean;
}

export const Title = styled.h1`
font-size: 48px;
color: #343434;
max-width: 450px;
line-height: 56px;
margin-top: 80px;
`

export const Form = styled.form<FormProps>`
margin-top: 40px;
max-width: 700px;
display: flex;

input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0px;
    border-radius: 5px 0 0 5px;
    font-family: 'Nunito', sans-serif;
    color: #343434;

    ${props => props.hasError && css`
        border: 2px dashed #c40214;
    `}

    &::placeholder {
        color: #a8a8b3;
        opacity: .7;;
    }
}

button {
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    transition: all .7s;
    &:hover {
        background: ${shade('0.3', '#343434')}
    }
}
`

export const Repositories = styled.div`
margin-top: 80px;
max-width: 700px;

a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: all .7s;
    & + a {
        margin-top: 16px;
    }
    &:hover {
        padding: 28px;
        transform: translateX(10px);
        box-shadow: 0 0 20px rgba(0,0,0,0.2);
    }

    &:hover svg {
        display: unset;
        color: #c40214;
    }
}

img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
}

div {
    margin-left: 20px;
    strong {
        font-size: 20px;
        color: #3d3d4d;
        text-transform: capitalize;
    }

    p {
        font-size: 18px;
        color: #a8a8b3;
        margin: 4px 0;
    }

}
svg {
    display: none;
    margin-left: auto;
    color: #cbcbd6;
    transition: all .7s;
}
`

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 10px;
    font-weight: bold;
`
