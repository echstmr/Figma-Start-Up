import User_1 from '../../assets/Img/user-1.png'
import User_2 from '../../assets/Img/user-2.png'
import User_3 from '../../assets/Img/user-3.png'
import User_4 from '../../assets/Img/user-4.png'

const Testimonial = () => {
  return (
    <div>
        {/* Testimonial Row 1*/}
        <div  className='w-[80%] mx-auto flex items-center justify-center gap-10 flex-wrap'>
            <div className='w-[400px] h-[100%] flex flex-col gap-5 border border-white text-scndry_txt p-10'> 
                {/* user */}
                <div className='flex items-center gap-4'>
                <img src={User_1}/>
                <h4 className='font-semibold'>Claire Bell <br /> Designer</h4>
                </div>
                {/* Comment */}
                <div>
                    <p>Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.your financial 
                    goal for the month and year.</p>
                </div>
            </div>
            <div className='w-[400px] h-100%] flex flex-col gap-5 border border-white text-scndry_txt p-10'> 
                {/* user */}
                <div className='flex items-center gap-4'>
                <img src={User_2}/>
                <h4 className='font-semibold'>Francisco Lane <br /> Designer</h4>
                </div>
                {/* Comment */}
                <div>
                    <p>Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.</p>
                </div>
            </div>

        </div>
      
        {/* Testimonial Row 2*/}
        <div  className='w-[80%] mx-auto flex items-center justify-center gap-10 flex-wrap my-10'>
            <div className='w-[400px] h-[100%] flex flex-col gap-5 border border-white text-scndry_txt p-10'> 
                {/* user */}
                <div className='flex items-center gap-4'>
                <img src={User_3}/>
                <h4 className='font-semibold'>Ralph Fisher <br /> Designer</h4>
                </div>
                {/* Comment */}
                <div>
                    <p>Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.</p>
                </div>
            </div>
            <div className='w-[400px] h-[100%] flex flex-col gap-5 border border-white text-scndry_txt p-10'> 
                {/* user */}
                <div className='flex items-center gap-4'>
                <img src={User_4}/>
                <h4 className='font-semibold'>Claire Bell <br /> Designer</h4>
                </div>
                {/* Comment */}
                <div>
                    <p>Slate helps you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year. Slate helps 
                    you see how many more days 
                    you need to work to reach your financial 
                    goal for the month and year.your financial 
                    goal for the month and year.</p>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Testimonial
