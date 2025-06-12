import { Link } from 'react-router-dom';

export const MainMenu = () => {
    // Define os itens do menu em um array de objetos
    const menuItems = [
        { path: '/', label: 'Home' },
        { path: '/favorites', label: 'Favorites' },
        // Adicione mais itens aqui facilmente:
        // { path: '/about', label: 'About Us' },
        // { path: '/contact', label: 'Contact' },
    ];

    return (
        <ul className="nav justify-content-center">
            {menuItems.map((item, index) => (
                <li className="nav-item" key={index}>
                    <Link className="nav-link" to={item.path}>
                        {item.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
