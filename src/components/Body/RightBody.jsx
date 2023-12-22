 import img from '../../assets/images.jpg'
 import img2 from '../../assets/tải xuống.jpg'
 import { FaChevronRight } from "react-icons/fa";
 import { FaChevronLeft } from "react-icons/fa";
 const products = [
  {
    id: 1, 
    name: "Thep Hoa Phat",
    img: img2
  },
  {
    id: 2, 
    name: "Thep Hoa Phat",
    img: img2
  },
  {
    id: 3, 
    name: "Thep Hoa Phat",
    img: img2
  },
  {
    id: 4, 
    name: "Thep Hoa Phat",
    img: img2
  },
  {
    id: 5, 
    name: "Thep Hoa Phat",
    img: img2
  },
  {
    id: 6, 
    name: "Thep Hoa Phat",
    img: img2
  },
 ]
const RightBody = () => {
  return (
    <div className="w-[79%]">
        <div className='relative'>
            <img className='h-[400px] w-[100%]' src={img} alt="" />
            <p className='absolute left-[27%] bottom-24 text-neutral-800 text-4xl font-bold'>NHÀ PHÂN PHỐI SĂT THÉP </p>
            <FaChevronRight className='absolute right-5 top-[50%] text-5xl '/>
            <FaChevronLeft className='absolute left-5 top-[50%] text-5xl '/>
        </div>
        <h1 className='text-center text-4xl text-red-900 font-bold my-4'>CONG TY TNHH TM - DV MANH CUONG</h1>
        <p className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In omnis quam asperiores voluptates provident sit obcaecati repudiandae cum, aperiam consequatur vitae, numquam, sunt laudantium veritatis. Animi esse quis exercitationem nisi!</p>
        <p className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In omnis quam asperiores voluptates provident sit obcaecati repudiandae cum, aperiam consequatur vitae, numquam, sunt laudantium veritatis. Animi esse quis exercitationem nisi!</p>
        <p className='my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In omnis quam asperiores voluptates provident sit obcaecati repudiandae cum, aperiam consequatur vitae, numquam, sunt laudantium veritatis. Animi esse quis exercitationem nisi!</p>
        <div className='text-white flex bg-black items-center justify-between'>
            <p className='py-3 pl-3 bg-blue-500 '>SAT THEP XAT DUNG</p>
            <p className=' mr-4'>Xem tat ca</p>
        </div>
        <div className='flex flex-wrap justify-between mt-5'>
          {products.map((item) => (<div className='  cursor-pointer w-[32%] mb-3 bg-slate-800' key={item.id}>
            <img className='w-[100%]' src={item.img} alt="" />
            <p className='text-center text-xl text-white font-medium hover:bg-blue-600 '>{item.name}</p>
          </div>))}
        </div>
    </div>
  )
}

export default RightBody