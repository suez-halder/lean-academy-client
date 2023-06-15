const Heading = ({ title, subtitle, center }) => {
  return (
    <div className={center ? 'text-center mt-24' : 'text-start mt-24'}>
      <div className='text-2xl md:text-5xl text-green-900 font-bold mb-4'>{title}</div>
      <div className='font-light text-neutral-500 my-2 mb-4 w-full md:w-1/2 mx-auto'>{subtitle}</div>
    </div>
  );
}

export default Heading;
