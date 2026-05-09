'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiGithub, FiLinkedin } from "react-icons/fi";


export default function Header() {
    const pathName = usePathname()
    return(
        <div id="header" className="flex justify-between items-center py-5 px-5 sm:px-10 border-b border-white/10 transition-colors text-white ">
            <Link href={'/'}>
                <p className="cursor-pointer hover:text-white ">SmackQdev</p>
            </Link> 
            <ul className="flex items-center gap-5">
                <Link href={'/'}   >
                    <li className={`cursor-pointer hover:text-white transition-colors ${ pathName === '/' ? 'text-white' : 'text-white/50' }`}>Home</li>
                </Link>
                <Link href={'/projects'} >
                    <li className={`cursor-pointer hover:text-white transition-colors ${ pathName === '/projects' ? 'text-white' : 'text-white/50' }`}>Projects</li>
                </Link>
            </ul>
            <div className="flex items-center gap-5">
                <Link  target="_blank" rel="noopener noreferrer" href={'https://github.com/smackqda-bit'}>
                    <FiGithub size={20} className="text-white/70 hover:text-white transition-colors cursor-pointer"/>
                </Link>
                <FiLinkedin  size={20} className="text-white/70 hover:text-white transition-colors cursor-pointer" />
            </div>
        </div>
    )
}