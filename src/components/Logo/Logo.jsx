import { Link } from 'react-router-dom';
import logo from './../../../public/logo.png'

const Logo = () => {
    return <Link to='/'><img className=' md:block' src={logo} alt="logo" width='100' height='80' /></Link>
};

export default Logo;