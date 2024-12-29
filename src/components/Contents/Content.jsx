import Content_Img_1 from '../../assets/Img/content-1.png'
import Content_Img_2 from '../../assets/Img/content-2.png'

const Content = () => {
  return (
    <div id='about'>
        {/* 2 Col Contents */}
        <div className='px-[100px] flex items-center justify-center gap-10 flex-col md:flex-row py-10'>
            {/* Col 1 */}
            <div className='flex flex-col items-center justify-between w-[100%] min-w-[350px] max-w-[476px] h-[500px] md:h-[624px] bg-light_bg p-10 rounded-md'>
                <h1 className='text-2xl font-bold'>Work</h1>
                <p className='w-[250px] text-center text-light_txt'>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                <button className='w-[157px] h-[52px] bg-primary font-semibold text-scndry_txt'>Sign Up</button>
                {/* Img Content Col 1*/}
                <div>
                    <img src={Content_Img_1} alt="Content-Img-1" className='md:w-[500px] w-[300px]' />
                </div>
            </div>
            {/* Col 2 */}
            <div className='flex flex-col items-center justify-between w-[100%] min-w-[350px] max-w-[476px] h-[500px] md:h-[624px] bg-light_bg p-10 rounded-md'>
                <h1 className='text-2xl font-bold'>Design with real data</h1>
                <p className='w-[250px] text-center text-light_txt'>Ever wondered if you're too reliant on a client for work? Slate helps you identify .</p>
                <button className='w-[157px] h-[52px] bg-primary font-semibold text-scndry_txt'>Try For Free</button>
                {/* Img Content Col 1*/}
                <div>
                    <img src={Content_Img_2} alt="Content-Img-2" className='md:w-[500px] w-[300px]' />
                </div>
            </div>

        </div>

      
    </div>
  )
}

export default Content
