import { FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'
import Logo from '../../../components/Logo/Logo';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-green-600 text-white">
            <div>
                <Logo></Logo>
                <p className="font-bold">
                    Lean Academy LLC <br />Providing reliable service since 1992
                </p>
                <p>Copyright © 2023 - All right reserved</p>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <FaTwitter className='text-xl'></FaTwitter>
                    <FaFacebook className='text-xl'></FaFacebook>
                    <FaYoutube className='text-xl'></FaYoutube>
                </div>
            </div>
        </footer>
    );
};

export default Footer;