// src/components/Footer.jsx

import React from 'react';

export const Footer = () => {
    const currentYear = new Date().getFullYear(); // Obtém o ano atual dinamicamente

    return (
        <footer className="bg-light text-center text-lg-start mt-auto py-3">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Movie List App</h5>
                        <p>
                            Este é um aplicativo de listagem de filmes, desenvolvido com React e utilizando a API do The Movie Database (TMDb).
                        </p>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Links Úteis</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="https://www.themoviedb.org/" className="text-dark" target="_blank" rel="noopener noreferrer">
                                    TMDb API
                                </a>
                            </li>
                            <li>
                                <a href="https://react.dev/" className="text-dark" target="_blank" rel="noopener noreferrer">
                                    React Docs
                                </a>
                            </li>
                            <li>
                                <a href="https://getbootstrap.com/" className="text-dark" target="_blank" rel="noopener noreferrer">
                                    Bootstrap
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Contato</h5>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <a href="mailto:luizcsdev@gmail.com" className="text-dark">
                                luizcsdev@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/luizcsbh" className="text-dark" target="_blank" rel="noopener noreferrer">
                                    GitHub do Luiz Santos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2 )' }}>
                © {currentYear} Copyright:
                <a className="text-dark" href="https://github.com/luizcsbh"> Desenvolvido por Luiz Santos</a>
            </div>
        </footer>
     );
};
