import React, { useState, useEffect } from 'react';
import { Container } from './style';
import api from '../../services/api';
import mooMooLogo from '../../assets/images/moo-moo-logo.png'

interface VegProduct {
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;
}

const Home: React.FC = () => {
    const [data, setData] = useState<VegProduct[]>([])
    useEffect(() => {
        api.get('').then(
            response => {
                setData(response.data)
            }
        )
    }, [])

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            firstName: { value: string };
            lastName: { value: string };
            email: { value: string };
            cep: { value: number }
        };
        const firstName = target.firstName.value;
        const lastName = target.lastName.value;
        const email = target.email.value;
        const cep = target.cep.value;
        const data = { firstName, lastName, email, cep }
        const clientStorage = JSON.stringify(data)
        localStorage.setItem(`@Cliente`, clientStorage)
    }

    const handleCart = (index: number) => {
        const productStorage = JSON.stringify(data[index])
        localStorage.setItem(`@Produto-${index}`, productStorage)
    }

    return (
        <Container>
            <header>
                <div>
                    <a className="logo-link" href="/">
                        <div className="logo">
                            <h3>moo</h3>
                            <img src={mooMooLogo} className="moo-moo-logo" alt="" height="70" />
                            <h3>moo</h3>
                        </div>
                    </a>
                </div>
            </header>
            <main>
                <section className="register">
                    <div className="call-register">
                        <h1>A <a className="logo-link" href="/">moo-moo</a> é uma loja especializada em produtos veganos de alta qualidade.</h1>
                        <p>Cadastre-se para receber produtos diretamente na sua casa </p>
                    </div>
                    <form className="call-register" onSubmit={handleSubmit}>
                        <input name="firstName" type="text" className="first-name" placeholder="Nome" required />
                        <input name="lastName" type="text" className="last-name" placeholder="Sobrenome" required />
                        <input name="email" type="email" className="e-mail" placeholder="e-mail" required />
                        <input name="cep" type="text" className="cep" placeholder="CEP" required />
                        <button type="submit" className="sign-in">CADASTRE-SE</button>
                    </form>
                </section>
                <section className="veg-products">
                    {data.map((prod, index) => (
                        <div className="product-content" key={prod.id}>
                            <div className="product-container">
                                <img src={prod.photo} alt="" width="200" height="auto" />
                            </div>
                            <h4>{prod.name}</h4>
                            <span>{prod.description}</span>
                            <h5>R${prod.price}</h5>
                            <div className="product-container">
                                <button onClick={() => handleCart(index)} >Adicionar ao carrinho</button>
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            <footer>
                <span>&copy; 2021 moo-moo. Todos os direitos reservados. Desenvolvido por <a className="dev-info" href="https://github.com/bmomose">Bruno Kenji Jardim Momose</a></span>
            </footer>
        </Container>
    );
}

export default Home;