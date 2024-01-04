import restaurant from "../../Media/restaurant.jpg"
const Hero = () => {
    let estilos={
        section:"w-[80%] mx-auto flex mt-20 mb-10",
        container:"w-[70%] flex flex-col gap-2",
        img:"w-[30%]",
        h1:"text-5xl font-semibold ",
        location:"text-xl  ",
        description:"w-[70%]",
        btn:"flex justify-center items-center w-[165px] mt-4 ml-6 py-2 px-6 bg-[#495E57]/50 hover:bg-[#495E57] font-bold transition-all ease-in duration-300  text-white rounded-lg shadow-lg "
    }
    let parts ={
        h1:"Little Lemon",
        location:"Chicago",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis cupiditate neque? Accusamus sed illo minima iusto quo quisquam optio? ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis cupiditate neque? Accusamus sed illo minima iusto quo quisquam optio?",
        btn:"Reserve a table",
        img:`${restaurant}`
    }
    return (<section className={estilos.section}>
        <div className={estilos.container}>
            <h1 className={estilos.h1}>{parts.h1}</h1>
            <span className={estilos.location}>{parts.location}</span>
            <p className={estilos.description}>{parts.description}</p>
            <a href="#" className={estilos.btn}>{parts.btn}</a>
        </div>
        <img src={parts.img} className={estilos.img}/>
    </section>);
}

export default Hero;