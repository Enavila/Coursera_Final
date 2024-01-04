import restaurant from "../../Media/Mario.jpg"
import restaurant2 from "../../Media/Adrian.jpg"
const About = () => {
    let estilos={
        section:"w-[80%] mx-auto flex mt-20 mb-10",
        container:"w-[70%] flex flex-col gap-2",
        img:"w-[30%]",
        h1:"text-5xl font-semibold ",
        location:"text-xl  ",
        description:"w-[70%]",
    }
    let parts ={
        h1:"Little Lemon",
        location:"Chicago",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis cupiditate neque? Accusamus sed illo minima iusto quo quisquam optio? ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nobis cupiditate neque? Accusamus sed illo minima iusto quo quisquam optio?",
        img:`${restaurant}`
    }
    return (<section className={estilos.section}>
        <div className={estilos.container}>
            <h1 className={estilos.h1}>{parts.h1}</h1>
            <span className={estilos.location}>{parts.location}</span>
            <p className={estilos.description}>{parts.description}</p>
        </div>
        <img src={parts.img} className={estilos.img}/>
    </section>);
}

export default About;