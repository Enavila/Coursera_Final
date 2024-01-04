import Hero from "./Sections/Hero";
import Special from "./Sections/Special";
import Testimonials from "./Sections/Testimonials";
import About from "./Sections/About";
const Main = () => {

    return (
        <main className="w-[100%]">
            <Hero/>
            <Special/>
            <Testimonials/>
            <About/>
        </main>
    );
}

export default Main;