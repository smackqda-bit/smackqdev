"use client"
export default function Footer() {
     const scrollToHeader = () => {
        const header = document.getElementById("header");
        if (header) {
            header.scrollIntoView({ behavior: "smooth" });
        }
    };
    
    return (
        <div className="">
            <hr className="text-white/10"/>
            <button className="cursor-pointer" onClick={scrollToHeader}>
                <p className="text-white/50 px-5 sm:px-10  hover:text-white transition-colors text-sm py-3">© 2026 SmackQ.dev | All right reserved</p>
            </button>
        </div>
    )
}