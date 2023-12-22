import { IoIosSearch } from "react-icons/io";
const navLinks = [
    {id: 1,
    name: 'TRANG CHU',
    link: '/#'
    },
    {id: 2,
    name: 'GIOI THIEU',
    link: '/#'
    },
    {id: 3,
    name: 'THEP XAY DUNG',
    link: '/#'
    },
    {id: 4,
    name: 'BAO GIA THEP',
    link: '/#'
    },
    {id: 5,
    name: 'VAT LIEU XAY DUNG',
    link: '/#'
    },
    {id: 6,
    name: 'LIEN HE',
    link: '/#'
    },

]

export const Navbar = () => {
  return (
   <nav  className="bg-black min-h-8"> <div className="container flex items-center justify-between py-2">
    <ul className="flex gap-5">
        {navLinks.map((item) => (
            <li key={item.id}><a className="text-white text-sm" href={item.link}>{item.name}</a></li>
        ))}
    </ul>
    <div className="flex bg-slate-300 p-1 rounded-lg items-center ">
        <input className="bg-slate-300 w-full h-full outline-none border-none" type="text" name="" id="" placeholder="Search" />
        <IoIosSearch className="text-3xl cursor-pointer"/>
    </div>
    </div></nav>
  )
}
