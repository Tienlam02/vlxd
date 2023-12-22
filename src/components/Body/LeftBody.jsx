import { FaListUl } from "react-icons/fa";
import image from '../../assets/Screenshot 2023-12-22 115350.png'
const links = [
    {id: 1,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 2,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 3,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 4,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 5,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 6,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 7,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 8,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 9,
    name: 'THEP VIET NAM',
    link: '/#'
    },
    {id: 10,
    name: 'THEP VIET NAM',
    link: '/#'
    },
]
const products = [
    {
    id: 1,
    name:'Thep Van Mien',
    img: image,
    link: '/#'
},
    {
    id: 1,
    name: 'Thep Cuon Tron',
    img: image,
    link: '/#'
},
    {
    id: 1,
    name: 'Thep Hai PHong',
    img: image,
    link: '/#'
},
]
const LeftBody = () => {
  return (
    <div className="bg-slate-200 w-[20%] max-h-[970px]">
        <div className="text-white bg-blue-800 flex items-center gap-4 px-2 py-3">
            <FaListUl className="mr-1"/>
            <p className="text-[1rem]">DANH MUC SAN PHAM</p>
        </div>
        <ul className=" flex flex-col ">
           {links.map((item) => (
            <><li className="hover:bg-slate-800 hover:text-white  p-2" key={item.id}><a className="text-xs"  href={item.link}>{item.name}</a></li>
             <div className="bg-white h-[1px] w-[100%]"></div>
             </>
           ))}
        </ul>
        <div className="text-white bg-blue-800 flex items-center gap-4 px-2 py-3">
            <FaListUl className="mr-1"/>
            <p className="text-[1rem]">SAN PHAM BAN CHAY</p>
        </div>
        <ul className=" flex flex-col ">    
           {products.map((item) => (
            <><li className="p-2" key={item.id}> <img className="w-[100%] mt-1 mb-1" src={item.img} alt="" /><a  href={item.link}>{item.name}</a></li>
             <div className="bg-black h-[1px] w-[100%]"></div>
             </>
           ))}
        </ul>
    </div>
  )
}

export default LeftBody