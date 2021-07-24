import styled from 'styled-components'
import mooMooBackground from '../../assets/images/moo-moo-logo-transparency.png'
import clouds from '../../assets/images/clouds.png'

export const Container = styled.div`
    width: 100%;
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Indie Flower', cursive;

    header {
        position: fixed;
        height: 100px;
        width: 100%;
        text-decoration: none;
        display: flex;
        justify-content:space-space-between;
        align-items: center;
        background-color: #fff;
    }

    .logo-link {
        text-decoration: none;
        color: #000;
        font-size: 2.5rem;
    }

    .logo {
        display: flex;
        align-items: center;
        margin-left: 30px;
    }

    .moo-moo-logo {
        margin-right: 15px;
    }

    .register {
        width: 100%;
        height: auto;
        background: #dff6f5;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-image: url(${clouds});
        background-repeat: repeat;
        background-position: center;
        padding-top: 110px;
        padding-bottom: 20px;
    }

    .call-register {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        width: 30rem;
        align-items: center;
        padding: 0 20px;
    }

    .call-register p {
        font-size: 1.5rem;
    }

    input {
        width             : 100%;
        padding           : 12px 20px;
        margin            : 8px 0;
        box-sizing        : border-box;
        border            : 3px solid #ccc;
        border-radius: 30px;
        -webkit-transition: 0.5s;
        transition        : 0.5s;
        outline           : none;
    }

    .first-name:focus, .last-name:focus, .e-mail:focus, .cep:focus {
        border: 3px solid #ffb49a;
    }

    .sign-in {
        border-radius: 50px;
        height: 50px;
        background: #ffb49a;
    }

    .veg-products {
        width: 100%;
        height: auto;
        background: #d4ffb2;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        background-image: url(${mooMooBackground});
        background-repeat: no-repeat;
        background-position: center;
        padding-top: 10px;
        padding-bottom: 10px;
    }
    
    .product-content {
        display: grid;
        text-align: center;
        align-content: center;
        justify-content: center;
        height: 400px;
        background: rgba(255, 255, 255, .8);
        border-radius: 12px;
        margin: 5px 0;
        padding: 12px;
        flex-basis: 25%;
    }

    .product-container {
        display: flex;
        justify-content: center;
    }

    .product-content h4 {
        font-size: 1.5rem;
    }

    .product-content span {
        font-size: .8rem;
    }

    .product-content h5 {
        font-size: 2rem;
    }

    button {
        font-family: 'Indie Flower', cursive;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        padding: 10px;
        border-radius: 30px;
        cursor: pointer;
        width: 200px;
    }

    button:hover {
        font-size: 1.125rem;
        color: green;
    }

    footer {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        background-color: #aa8f6d;
        font-size: 1.25rem;
        color: #fff;
    }

    .dev-info {
        text-decoration: none;
        font-weight: bold;
        color: #f2bc0b;
    }
`
