import {MdEmail} from 'react-icons/md'


const Card = ({ instructor }) => {

    return (
        <div className="className='col-span-1 cursor-pointer group'">
            <div className='flex flex-col gap-2 w-full'>
                <div
                    className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
                >
                    <img
                        className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
                        src={instructor.photo}
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
                <div className='font-semibold text-lg'>{instructor.name}</div>
                <div className='font-light text-neutral-500 flex items-center  gap-2'>
                    <MdEmail></MdEmail>
                    {instructor.email}
                </div>
                
            </div>
        </div>
    );
};

export default Card;