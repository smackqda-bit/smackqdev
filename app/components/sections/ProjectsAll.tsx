
import ProjectCard from "../UI/ProjectCard"
import { ProjectsData } from "@/data/ProjectsData"

export default function ProjectsAll() {
    return (
        <div className=" mt-20 mb-20">
            
            

            <div className="mt-10 mx-5 sm:mx-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {
                    ProjectsData.map((item) => (
                        <ProjectCard srcImage={item.srcImage} title={item.title} description={item.description} key={item.id} id={item.id} />
                    ))
                }
                    
                

            </div>
        </div>
    )
}