import Cards from "./cards/Cards";
import lemon from "../../Media/lemon.jpg"
const Special = () => {

    let specials =[
        {name:"Lemon pie",precio:"6.58$",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum nobis doloremque quod harum perspiciatis quaerat",img:`${lemon}`},
        {name:"Lemon pie",precio:"6.58$",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum nobis doloremque quod harum perspiciatis quaerat",img:`${lemon}`},
        {name:"Lemon pie",precio:"6.58$",description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum nobis doloremque quod harum perspiciatis quaerat",img:`${lemon}`}
    ]

    let estilos = {
        container:"w-[80%] my-20 mx-auto flex flex-col gap-2",
        box:"flex w-[100%]  my-5 justify-evenly items-center",
        box2:"flex w-[100%]   justify-between items-center",
        h2:"text-3xl font-semibold",
        a:"text-xl font-semibold text-[#495E57] px-4 py-2 bg-[#F4CE14]/70 rounded-lg shadow-lg hover:bg-[#F4CE14] transition-all ease-in duration-300"
    }
    return (
        <section className={estilos.container}>
            <div className={estilos.box2}>
                <h2 className={estilos.h2}>Specials</h2>
                <a href="#" className={estilos.a}>Online Menu</a>
            </div>
            <div className={estilos.box}>
                {specials.map((special)=>(
                    <Cards
                        ID={`${special.name}`}
                        Nombre={special.name}
                        Precio={special.precio}
                        Description={special.description}
                        Imagen={special.img}
                    />
                ))}
            </div>
        </section>
    );
}

export default Special;