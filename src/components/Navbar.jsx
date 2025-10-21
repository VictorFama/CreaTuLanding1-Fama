import CartWidget from './CartWidget'
import './Navbar.css'
import logo from '../assets/react.svg'

const Navbar = () => {
    return (
        <nav className='navbar'>
                <div className='logo'>
                    <img src={logo} alt="logo"/>
                </div>
                <ul className='menu'>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Categorias</a></li>
                </ul>
                <div className='cart'>
                    <CartWidget />
                </div>
        </nav>
    )
}

export default Navbar
