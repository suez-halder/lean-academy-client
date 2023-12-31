import {MdEmail} from 'react-icons/md'


const Card = ({ instructor }) => {

    return (
        <div className='col-span-1 cursor-pointer group'>
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
            aspect-square 
            w-4/5 
            relative 
            overflow-hidden 
            rounded-xl
            mx-auto
            mt-8
            
          '
                >
                    <img
                        className='
              object-fit 
              h-full 
              w-full 
             
              transition
            '
                        src={instructor?.photo}
                        alt='Room'
                    />
                    <div
                        className='
            absolute
            top-3
            right-3
          '
                    >
                        {/* <HeartButton /> */}
                    </div>
                </div>
                <div className='font-semibold text-lg text-center'>{instructor?.name}</div>
                <div className='font-light text-neutral-500 flex items-center  gap-2 mb-8 justify-center'>
                    <MdEmail></MdEmail>
                    {instructor?.email}
                </div>
                
            </div>
        </div>
    );
};

export default Card;