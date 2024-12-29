import P1 from '../../assets/Img/p1.png'
import P2 from '../../assets/Img/p2.png'
import P3 from '../../assets/Img/p3.png'
import P4 from '../../assets/Img/p4.png'
import P5 from '../../assets/Img/p5.png'
import P6 from '../../assets/Img/p6.png'

const Partners = () => {
  return (
    <div>
        {/* Partners */}
        <div className="w-[80%] mx-auto flex flex-wrap justify-center items-center gap-[70px]">
            <img src={P1}/>
            <img src={P2}/>
            <img src={P3}/>
            <img src={P4}/>
            <img src={P5}/>
            <img src={P6}/>
        </div>

         {/* Partners Button */}
         <div className='flex items-center justify-center py-20'>
            <button className='w-[176px] h-[52px] border border-white text-scndry_txt font-semibold hover:text-primary'>All Partners</button>
         </div>
      
    </div>
  )
}

export default Partners
