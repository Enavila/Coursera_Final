import Cards2 from "./cards/Cards2";
import lemon from "../../Media/lemon.jpg"
import user1 from "../../Media/user.jpg"
const Testimonials = () => {
    let Testimons=[
        {
            platoName:"Lemon Pie",
            userName:"@Pablo Perez",
            userImg:`${user1}`,
            platoDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum quis doloremque quod harum perspiciatis quaerat",
            platoImg:`${lemon}`
        },
        {
            platoName:"Lemon Pie",
            userName:"@Juan Perez",
            userImg:`${user1}`,
            platoDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum quis doloremque quod harum perspiciatis quaerat",
            platoImg:`${lemon}`
        },
        {
            platoName:"Lemon Pie",
            userName:"@Carlos Perez",
            userImg:`${user1}`,
            platoDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum quis doloremque quod harum perspiciatis quaerat",
            platoImg:`${lemon}`
        },
        {
            platoName:"Lemon Pie",
            userName:"@Jose Perez",
            userImg:`${user1}`,
            platoDescription:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat assumenda impedit, sed esse autem nostrum quis doloremque quod harum perspiciatis quaerat",
            platoImg:`${lemon}`
        }
    ]
    return (
        <section className="w-[80%] mx-auto my-20">
            <h2 className="text-3xl font-semibold">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 my-5 gap-4 ">
                {
                    Testimons.map((Testimon)=>(
                        <Cards2
                            ID={Testimon.userName}
                            platoName={Testimon.platoName}
                            userName={Testimon.userName}
                            userImg={Testimon.userImg}
                            commentUser={Testimon.platoDescription}
                            platoImg={Testimon.platoImg}
                        />
                    ))
                }
            </div>
        </section>
    );
}

export default Testimonials;