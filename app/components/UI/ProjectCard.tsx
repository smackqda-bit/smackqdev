import Image from "next/image"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi";
import { ProjectInterface } from "@/Interfaces/ProjectsInterface"
export default function ProjectCard({title, srcImage, description, id}: ProjectInterface ) {
    return (
        <div>
            <Link target="_blank" rel="noopener noreferrer"  href={'https://smackflow.space/'}>
            <div className="flex gap-3 items-center mb-5">
                <h1 className="text-xl  text-white">{title}</h1>
                <FiArrowUpRight size={30} className="text-white/50 hover:text-white transition-colors" />
            </div>
            
            
            <div className="relative w-full h-56 sm:h-48 overflow-hidden rounded-2xl">
                <Image 
                    src={srcImage} 
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="eager"
                    className="object-cover object-center"
                />
            </div>
            <p className="mt-5 text-white/50 line-clamp-3">{description}</p>
            </Link>

        </div>
    )
}