import ebook from '../../../assets/promote-ebook.jpeg'
import {FiDownload} from 'react-icons/fi'

const Ebook = () => {
    return (
        <>
            <div className='flex flex-col md:flex-row justify-between items-center gap-12 w-4/5 mx-auto mt-24'>
                <img src={ebook} alt="book" className='w-2/3 md:w-1/2 rounded-lg' />
                <div className='text-center md:text-left'>
                    <h2 className='text-xl md:text-4xl text-green-900 font-bold mb-4'>Download Lean Academy Exclusive Ebook</h2>
                    <p className='font-light text-neutral-500 md:my-2 md:mb-4 w-full mx-auto'>Unlock unparalleled insights with the Lean Academy Exclusive Ebook! Dive deep into proven strategies, innovative techniques, and expert recommendations for lean transformation. Elevate your knowledge and drive impactful change. Get your digital copy today and embark on a journey towards operational excellence.</p>
                    <button className="btn btn-accent my-4 w-1/2">Download <span className='text-lg md:text-2xl'><FiDownload/></span></button> 
                </div>
            </div>

        </>
    );
};

export default Ebook;