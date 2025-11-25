import './Nav.css'
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext/UseCartContext"


export const Nav = () => {
    const { getTotalItems } = useCartContext();

    return (
        <nav>
            <ul>
                <li><Link to={"/"}>Inicio</Link></li>
                <li><Link to={"/category/calzado"}>Calzado</Link></li>
                <li><Link to={"/category/vestimenta"}>Vestimenta</Link></li>
                <li><Link to={"/category/accesorios"}>Accesorios</Link></li>
            </ul>
            <Link to={"/cart"} className="cart">
                <span className="cart-line"> | </span>
                <span class="cart-icon material-symbols-outlined">shopping_bag</span>
                <span className="cart-title">Carrito</span> 
                <span className="cart-count">{getTotalItems()}</span>
            </Link>
        </nav>
    );
};
