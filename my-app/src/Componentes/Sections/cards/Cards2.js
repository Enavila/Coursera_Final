const Cards2 = (props) => {
    return (
        <div key={props.ID} id={props.ID} className="w-[100%] overflow-hidden rounded-md shadow-lg">
            <div className="flex justify-start items-center p-2 gap-2">
                <div className="flex justify-center items-center w-[50px] h-[50px]  rounded-[100%] overflow-hidden">
                    <img src={props.userImg} alt={props.userName} className="w-[100%]"/>
                </div>
                <span className="text-xl font-semibold text-yellow-500">{props.userName}</span>
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-1 px-4">
                    <h3 className="text-xl text-black/90 font-semibold ">{props.platoName}</h3>
                    <span className=" text-md font-semibold text-black/70  ">{props.commentUser}</span>
                </div>
                <img src={props.platoImg} alt={props.platoName} className="w-[100%]"/>
            </div>
        </div>
    );
}

export default Cards2;