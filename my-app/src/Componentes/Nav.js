import logo from "../Media/Logo.svg"
import { useState } from "react";
const Nav = () => {

    let [open, setOpen] = useState(false)

    let sections = [
        {name:"HOME", link:"/"},
        {name:"ABOUT", link:"/about"},
        {name:"MENU", link:"/menu"},
        {name:"RESERVATIONS", link:"/reservations"},
        {name:"ORDER ONLINE", link:"/order"},
        {name:"LOGIN", link:"/login"},
    ]
    const estilos = {
        navbar: "md:flex justify-between items-center w-full min-h-[60px] md:min-h-[50px] shadow-md fixed top-0 left-0 bg-zinc-900 text-white  md:px-20 px-2 z-10 ",
        contenedor: `md:flex  md:items-center  md:pb-0 pb-4 absolute md:static bg-zinc-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all ease-in duration-500 ${open ? "top-16" : "top-[-300px] "}`,
        cajaLogo: "flex items-center gap-4 min-w-[200px] py-4 bg-zinc-900",
        imagen: "w-[150px]",
        textLogo: "text-xl font-bold text-yellow-400 ",
        li: "md:ml-6 md:my-0 my-4",
        burguer: "material-symbols-outlined text-3xl absolute right-8 top-3 cursor-pointer md:hidden",
        a:"text-white text-xl font-bold"
    }
    return (
        <nav className={estilos.navbar}>
            <div className={estilos.cajaLogo}>
                <img src={logo} alt="logo" className={estilos.imagen} />
                {/* <span className={estilos.textLogo}>EnavilaField</span> */}
            </div>
            <span onClick={() => setOpen(!open)} className={estilos.burguer}>
                {open ? "close" : "menu"}
            </span>
            <ul className={estilos.contenedor}>
                {
                    sections.map((link) => (
                        <li key={link.name} className={estilos.li}>
                            <a href={link.link} className={estilos.a}>
                                {link.name}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default Nav;