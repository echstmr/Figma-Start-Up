import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";





const Footer = () => {
  return (
    <div id="contact">
      {/* Footer */}
      <div className="w-[70%] mx-auto">
        {/* 2 Col */}
        <div className="flex md:flex-row flex-col justify-between my-20">
      {/* FooterLinks Col 1 */}
        <div className="text-scndry_txt">
          <h4 className="font-semibold text-2xl">Fingertipe</h4>
          <div>
              <ul className="flex flex-col gap-2 py-10">
                <li className="font-semibold hover:text-primary cursor-pointer">Home</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Examples</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Pricing</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Updates</li>
              </ul>
          </div>
        </div>
        <div className="text-scndry_txt">
          <h4 className="font-semibold text-2xl">Resources</h4>
          <div>
              <ul className="flex flex-col gap-2 py-10">
                <li className="font-semibold hover:text-primary cursor-pointer">Home</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Examples</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Pricing</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Updates</li>
              </ul>
          </div>
        </div>
        <div className="text-scndry_txt">
          <h4 className="font-semibold text-2xl">About</h4>
          <div>
              <ul className="flex flex-col gap-2 py-10">
                <li className="font-semibold hover:text-primary cursor-pointer">Home</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Examples</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Pricing</li>
                <li className="font-semibold hover:text-primary cursor-pointer">Updates</li>
              </ul>
          </div>
        </div>
        {/* SocialLinks Col 2 */}
         <div className="text-scndry_txt">
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-2"><FaLocationDot size={20}/> 7480 Mockingbird Hill undefined </li>
                <li className="flex items-center gap-2"><BsFillTelephoneForwardFill size={20}/> (239) 555-0108</li>
                <li className="flex items-center gap-2"><FaTwitter size={20}/> <FaFacebookSquare size={20}/> <FaLinkedin size={20}/></li>
              </ul>
         </div>
      </div>

      </div>
    </div>
  )
}

export default Footer
