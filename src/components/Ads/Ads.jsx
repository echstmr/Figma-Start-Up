import Ads_Img from '../../assets/Img/ads.png'
const Ads = () => {
  return (
    <div>
        {/* Ads */}
        <div className='w-[90%] h-[100%] mx-auto flex items-center md:flex-row flex-col bg-[#343434] px-20 overflow-hidden rounded-lg gap-10 md:pt-0 pt-10 my-20'>
            {/* Ads Text */}
            <div className='flex flex-col gap-4 md:items-start items-center'>
                <h1 className='w-[100%] max-w-[500px] min-w-[300px] font-semibold text-3xl md:text-4xl md:text-start text-center text-scndry_txt'>OpenType features and Variable fonts</h1>
                <button className='w-[180px] h-[40px] bg-primary font-semibold'>Try For Free</button></div>
            {/* Ads Img */}
            <div>
                <img src={Ads_Img}  className='w-[100%] min-w-[400px] max-w-[500px]'/>
            </div>

        </div>
      
    </div>
  )
}

export default Ads
