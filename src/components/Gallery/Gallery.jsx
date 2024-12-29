import Image1 from '../../assets/img/1.png'
import Image2 from '../../assets/img/2.png'
import Image3 from '../../assets/img/3.png'
import Image4 from '../../assets/img/4.png'
import Image5 from '../../assets/img/5.png'
import Image6 from '../../assets/img/6.png'
import Image7 from '../../assets/img/7.png'

const Gallery = () => {

  return (
    
    <div>
      {/* Gallery */}
      <div>
        {/* 4 COl */}
        <div className='flex flex-wrap md:flex-row flex-col items-center justify-center px-5 '>
            <img src={Image4} className='hover:scale-110 duration-300 cursor-pointer'/>
            <img src={Image1} className='hover:scale-110 duration-300 cursor-pointer'/>
            <img src={Image2} className='hover:scale-110 duration-300 cursor-pointer'/>
            <img src={Image3} className='hover:scale-110 duration-300 cursor-pointer'/>
        </div>
        {/* 3 Col */}
        <div className='flex items-center justify-center flex-wrap md:hidden lg:flex sm:flex hidden px-5'>
            <img src={Image5} className='hover:scale-110 duration-300 cursor-pointer'/>
            <img src={Image6} className='hover:scale-110 duration-300 cursor-pointer'/>
            <img src={Image7} className='hover:scale-110 duration-300 cursor-pointer'/>
        </div>
        {/* Gallery Button */}  
        <div className='flex items-center justify-center py-5'>
            <button className='w-[159px] h-[52px] border border-white text-scndry_txt font-semibold hover:text-primary'>See More</button>
        </div>
      </div>
      
    </div>
  )
}

export default Gallery
