import ProjectCard from "../components/ProjectCard"
import ProjectsNavbar from "../components/ProjectsNavbar"
import { projects as projectsData } from "../data"
import {useState} from 'react';
import { Category } from "../type";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";
import Head from 'next/head'

 const Projects = () => {

    const [projects, setprojects] = useState(projectsData);
    const [active, setactive] = useState("All");
    const [showDetail, setshowDetail] = useState<number|null>(null);

        const handlerFilterCategory=(category:Category|'All')=>{
             
            if(category==="All"){
                setprojects(projectsData);
                setactive(category);
                return;
            }
          const newArray=  projectsData.filter(project=>project.category.includes(category));
       
        setprojects(newArray);
        setactive(category);
        }

    return (
        <div className="px-5 py-2  h-11/12" >
             <Head>
        <title>Portfolio - Projects</title>
      </Head>
                <ProjectsNavbar handlerFilterCategory={handlerFilterCategory} active={active} ></ProjectsNavbar>


            

            <motion.div className=" relative grid grid-cols-12 gap-4 my-3 "
               
                
            >
                
                {projects.map(project=>(
                        
                    <motion.div className=" rounded-lg col-span-12 bg-gradient-to-r
                     dark:from-blueCustom-backgroundDark dark:to-blueCustom-backgroundLight 
                    from-green-200 to-blue-300 
                    sm:col-span-6 lg:col-span-4 p-2"
                    key={project.name}
                    variants={fadeInUp}
                    animate="animate"
                    initial="initial"
                
                    >

                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setshowDetail}/>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Projects
