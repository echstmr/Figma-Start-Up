import Featured_Img from '../../assets/Img/featured-img.png'
import Featured_1 from '../../assets/Img/featured-1.png'
import Featured_2 from '../../assets/Img/featured-2.png'
import Featured_3 from '../../assets/Img/featured-3.png'

const Featured = () => {
  return (
    <div id='product'>
        {/* 2 Col */}
        <div className='flex md:flex-row flex-col items-center justify-center gap-10 md:gap-2'>
            {/* Col 1 */}
            <div>
                <img src={Featured_Img} alt="Featured-Img" className='w-[600px]' />
            </div>

            {/* Col 2 */}
            <div className='flex flex-col items-center gap-5'>
                {/* 3 Row Featured*/}
                <div className='flex flex-col w-[100%] max-w-[300px] min-w-[100] text-scndry_txt'>
                    <p className='font-bold text-2xl flex items-center gap-2'><img src={Featured_1}/>A single source of truth</p>
                    <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                </div>
                <div className='flex flex-col w-[100%] max-w-[300px] min-w-[100] text-scndry_txt'>
                    <p className='font-bold text-2xl flex items-center gap-2'><img src={Featured_2}/>Intuitive interface</p>
                    <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                </div>
                <div className='flex flex-col w-[100%] max-w-[300px] min-w-[100] text-scndry_txt'>
                    <p className='font-bold text-2xl flex items-center gap-2'><img src={Featured_3}/>Or with rules</p>
                    <p>When you add work to your Slate calendar we automatically calculate useful insights</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Featured
