import logoFooter from "../Media/logo_footer.png"
const Footer = () => {
    let estilos ={
        footer:"h-[30vh] flex justify-between items-start px-20 border-t-2 border-zinc-800 py-4",
        img:"h-[100%]"
    }
    let sections = [
        {name:"HOME", link:"/"},
        {name:"ABOUT", link:"/about"},
        {name:"MENU", link:"/menu"},
        {name:"RESERVATIONS", link:"/reservations"},
        {name:"ORDER ONLINE", link:"/order"},
        {name:"LOGIN", link:"/login"},
    ]
    let contacts = [
        {name:"Adress"},{name:"Phone number"},{name:"email"}
    ]
    return (
        <footer className={estilos.footer}>
            <img src={logoFooter} className={estilos.img}/>
            <div>
                <p>Dorrmant Navigation</p>
                <ul >
                {
                    sections.map((link) => (
                        <li key={link.name} >
                            <a href={link.link} >
                                {link.name}
                            </a>
                        </li>
                    ))
                }
                </ul>
            </div>
            <div>
                <p>Conatct</p>
                <ul >
                {
                    contacts.map((link) => (
                        <li key={link.name} >
                            {link.name}
                        </li>
                    ))
                }
                </ul>
            </div>
            <div>
                <p>Social Media Links</p>
                <ul >
                {
                    contacts.map((link) => (
                        <li key={`2${link.name}`} >
                            {link.name}
                        </li>
                    ))
                }
                </ul>
            </div>

        </footer>
    );
}

export default Footer;