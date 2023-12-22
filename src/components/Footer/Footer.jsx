import img from '../../assets/Screenshot 2023-12-22 200012.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdSmartphone } from "react-icons/md";
import { BiLogoGmail } from "react-icons/bi";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { CgMail } from "react-icons/cg";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="mt-6">
        <div className="bg-black">
            <div className="container text-white pt-12 pb-4 flex gap-5">
                <div className="flex flex-col gap-5 w-[30%]">
                    <p className="text-2xl">MANH CUONG STEELW</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam ducimus iste deserunt, recusandae et amet modi assumenda deleniti totam, similique doloribus? Facere voluptatem expedita velit reprehenderit quae fuga sunt quam!</p>
                    <div className="flex items-center gap-3">
                        <FaLocationDot className="text-yellow-500"/>
                        <p>Dia chi: 77 duong so 1</p>
                    </div>
                    <div className="flex items-center gap-3">
                       <MdSmartphone className="text-yellow-500"/>
                        <p>So dien thoai: 888888</p>
                    </div>
                    <div className="flex items-center gap-3">
                       <BiLogoGmail className="text-yellow-500"/>
                        <p>Gmail: abc@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-4">
                       <CiFacebook className="text-white text-3xl" />
                       <FiTwitter className="text-white text-3xl"/>
                       <CgMail  className="text-white text-3xl"/>
                       <FaYoutube  className="text-white text-3xl"/>
                    </div>
                </div>
                 
                <div className=" ml-5 flex flex-col gap-5 w-[20%]">
                    <p className="text-2xl">SITE MAPS</p>
                    <div className="flex items-center gap-3">
                        <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                        <a href="">Trang chu</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Gioi thieu</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Thep xay dung</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Thep xay dung</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Thep xay dung</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Thep xay dung</a>
                    </div>
                </div>
                 
                <div className="flex flex-col gap-5 w-[30%]">
                    <p className="text-2xl">SAN  PHAM</p>
                    <div className="flex items-center gap-3">
                        <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                        <a href="">Sat thep mien nam</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Sat thep viet nhat</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Sat thep viet uc</a>
                    </div>
                    <div className="flex items-center gap-3">
                       <RiCheckboxBlankCircleFill className="text-yellow-500"/>
                       <a href="">Thep xay dung</a>
                    </div>
                    
                </div>
                 
                <div className="flex flex-col gap-5 w-[30%]">
                    <p className="text-2xl">FanPage</p>
                    <div className="flex items-center gap-3">
                        <img src={img} alt="" />
                    </div>
                     
                </div>
                 
            </div>
        </div>
        <div className="bg-[#111111] text-white" >
            <div className="container flex justify-between py-4">
            <p>copyright</p>
            <p>design by team</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer