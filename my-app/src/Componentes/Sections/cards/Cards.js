const Cards = (props) => {
    let estilos ={
        container:"w-[260px] overflow-hidden rounded-md shadow-lg",
        img:"w-[100%]",
        boxF:"flex flex-col gap-1",
        boxC:"flex justify-between px-2",
        h3:"text-xl",
        span:"text-xl font-semibold text-yellow-500",
        p:"text-sm text-black/70 px-4",
        span2:"text-sm text-black/90 px-4 ",
    }
    return (
        <div key={props.ID} id={props.ID} className={estilos.container}>
            <img src={props.Imagen} alt={props.Nombre} className={estilos.img}/>
            <div className={estilos.boxF}>
                <div className={estilos.boxC}>
                    <h3 className={estilos.h3}>{props.Nombre}</h3>
                    <span className={estilos.span}>{props.Precio}</span>
                </div>
                <p className={estilos.p}>{props.Description}</p>
                <span className={estilos.span2}>More info</span>
            </div>
        </div>
    );
}

export default Cards;