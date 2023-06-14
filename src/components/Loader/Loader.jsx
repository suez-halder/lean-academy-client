import { GridLoader } from 'react-spinners'

const Loader = () => {
    return (
        <div
            className='
        h-[70vh]
        flex 
        flex-col 
        justify-center 
        items-center 
      '
        >
            <GridLoader size={25} color='green' />
        </div>
    );
};

export default Loader;