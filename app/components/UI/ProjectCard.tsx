import Image from "next/image"
import { ProjectInterface } from "@/Interfaces/ProjectsInterface"
export default function ProjectCard({title, srcImage, description, id}: ProjectInterface ) {
    return (
        <div>
            <h1 className="text-xl mb-5 text-white">{title}</h1>
            
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

        </div>
    )
}