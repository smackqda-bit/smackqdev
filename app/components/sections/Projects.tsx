import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

import ProjectCard from "../UI/ProjectCard"
import { ProjectsData } from "@/data/ProjectsData"
import Link from 'next/link';
export default function Projects() {
    return (
        <div className=" mt-20 mb-20">
            <div className="flex justify-between items-center px-5 sm:px-10">
                <h1 className="text-2xl text-white ">Recent projects</h1>
                <div className="flex items-center justify-center gap-5 ">
                    <p className="text-white/50 text-lg  transition-colors">View all</p>
                    <Link href={'/projects'}>
                        <FaArrowUpRightFromSquare className="text-white/50 hover:text-white cursor-pointer"  size={16}/>
                    </Link>
                </div>
            </div>
            <hr className="text-white/10 mt-4"/>

            <div className="mt-10 mx-5 sm:mx-10 grid grid-cols-1 sm:grid-cols-2 gap-10">
                {
                    ProjectsData.slice(0,2).map((item) => (
                        <ProjectCard srcImage={item.srcImage} title={item.title} description={item.description} key={item.id} id={item.id} />
                    ))
                }
                    
                

            </div>
        </div>
    )
}