import { createGlobalStyle } from 'styled-components'
import gitBg from '../assets/background.svg'

export default createGlobalStyle`
    * {
        margin: 0px;
        padding: 0px;
        outline: 0;
        box-sizing: border-box;
    }

    body {
        background: #f0f0f5 url(${gitBg}) no-repeat 70% top;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'PT Sans', sans-serif;
        font-size: 16px;
    }

    #root {
        max-width: 960px;
        margin: 0 auto;
        padding: 40px 20px;
    }

    button {
        cursor: pointer;
    }
`
