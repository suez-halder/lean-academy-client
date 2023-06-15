import {MdEmail} from 'react-icons/md'


const ClassCard = ({ topClass }) => {

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
              object-fit 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
                        src={topClass?.image}
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
                <div className='font-semibold text-lg'>{topClass?._id}</div>
                <div className='font-medium text-lg'>Total Enrolled: {topClass.count}</div>
                <div className='font-light text-neutral-500 flex items-center  gap-2'>
                    Price: 
                    ${topClass?.price}
                    
                </div>
                
            </div>
        </div>
    );
};

export default ClassCard;