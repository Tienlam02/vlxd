 import img from '../../assets/Screenshot 2023-12-22 115350.png'
import { Navbar } from './NavBar/Navbar'
const Header = () => {
  return (
   <>
         <div className="bg-red-400 min-h-7 py-2"><div className="container"><h3 className="text-2xl text-white">Wellcome to Manh Cuong</h3></div></div>
         <div className="bg-orange-600 min-h-48  relative overflow-hidden">
            <div className="container flex flex-col gap-3 text-white ">
                <h1 className="text-4xl font-bold mt-5">MẠNH CƯỜNG STELL 
               </h1> <p>Địa chỉ: 21 lộc bình lạng sơn</p>
              <p>Địa chỉ: 21 lộc bình lạng sơn</p>
              <p>Địa chỉ: 21 lộc bình lạng sơn</p>
            </div>
            <div className='  absolute top-[-250px] right-0 w-[700px] h-[700px] bg-black transition rotate-45 '>  <img className=' w-[100%] h-[100%] ' src={img} alt="" /></div>
        </div>
        <Navbar />
   </>
  )
}

export default Header