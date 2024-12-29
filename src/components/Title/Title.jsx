
const Title = (props) => {
  return (
    <div className='w-[100%]'>
        {/* Title */}
        <div className=' flex flex-col items-center text-scndry_txt py-20 p-5'>
            <h1 className='md:text-[60px] text-5xl'>{props.title}</h1>
            <p className='w-[100%] max-w-[550px] min-[400px] text-center py-5'>{props.subtitle}</p>
        </div>
      
    </div>
  )
}

export default Title
