import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
        font-weight: bold;
        transition: color .4s;

        &:hover {
            color: crimson;
        }

        svg {
            margin-right: 4px;
        }
    }
`

export const RepositoryInfo = styled.section`
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;
        img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }

        div {
            margin-left: 24px;

            strong {
                font-size: 36px;
                color: #3d3d4d;
            }

            p {
                font-size: 18px;
                color: #737380;
            }
        }
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 40px;

        li {
            text-align: center;
            strong {
                display: block;
                font-size: 36px;
                color: #3d3d4d;
            }

            span {
                display: block;
                margin-top: 4px;
                color: #6c6c80;
            }

            & + li {
                margin-left: 80px;
            }
        }
    }
`

export const Issues = styled.div`
margin-top: 80px;

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

div {
    margin-left: 20px;
    strong {
        font-size: 20px;
        color: #3d3d4d;
        text-transform: capitalize;
    }

    p {
        font-size: 16px;
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
