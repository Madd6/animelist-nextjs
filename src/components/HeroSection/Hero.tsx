import style  from "./css/style.module.css";
const Hero = () => {
    return ( 
        <div className="w-full h-[85vh] p-10 flex justify-center items-center bg-background">
            <div className="bg-red-500 w-full h-full rounded-3xl relative">
                <div 
                    className={`flex items-center justify-around w-1/5 h-[20%]
                    absolute bottom-0 right-0 bg-indigo-500 rounded-3xl 
                    ring-[20px] ring-background ${style.containerBtnHero}`}
                >
                    <button>Prev</button>
                    <button>Next</button>
                </div>
            </div>
        </div>
    );
}
 
export default Hero;