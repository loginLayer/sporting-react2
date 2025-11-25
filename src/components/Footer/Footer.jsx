import './Footer.css'
import f from '../../../public/images/social/f.png';
import i from '../../../public/images/social/i.png';
import x from '../../../public/images/social/x.png';

export const Footer = () => {
    return (
         <footer>
            
            <div className="footer">
                <div className="footer-left">
                    <ul>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </div>
                <div className="footer-right">
                    <p>Seguinos</p>
                    <div className="social-icons">
                        <a href="#"><img src={i} alt="Instagram" /></a>
                        <a href="#"><img src={x} alt="X" /></a>
                        <a href="#"><img src={f} alt="Facebook" /></a>
                    </div>
                </div>
            </div>
            
            <div className="bottom-bar">
                <span className="material-symbols-outlined">copyright </span>
                <p> 2025 SPORTING. Todos los derechos reservados</p>
            </div>

        </footer>

    );
};
