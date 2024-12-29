import Hero_Img from '../../assets/img/hero-img.png'
const Hero = () => {
  return (

    <div className='flex flex-col items-center h-[100%] text-scndry_txt'>
        {/* HeroText */}
        <div className='flex flex-col gap-5 items-center text text-center py-20 p-4'>
            <h1 className='w-[100%] max-w-[720px] min-[300px] text-5xl md:font-bold py-7'>Work at the speed of thought</h1>
            <p className='w-[80%] max-w-[600px] min-[300px]'>Most calendars are designed for teams. Slate is designed for 
            freelancers who want a simple way to plan their schedule.</p>
        </div>
        {/* HeroButton */}
        <div className='flex flex-col md:flex-row items-center gap-5'>
            <button className='md:w-[150px] md:h-[50px] w-[180px] h-[59px] bg-primary font-semibold'>Try For Free</button>
            <button className='md:w-[150px] md:h-[50px] w-[180px] h-[59px] border font-semibold'>Learn More</button>
        </div>
        {/* HeroImg */}
        <div className='pt-10'>
            <img src={Hero_Img} alt="Hero-Img" className='w-full' />
        </div>
      
    </div>
  )
}

export default Hero
