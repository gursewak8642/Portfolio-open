import { FunctionComponent } from "react"
import { ISkill } from "../type"
import{FaRegArrowAltCircleRight} from 'react-icons/fa'
import {BsArrowRightCircleFill} from 'react-icons/bs'
import {GrCode} from 'react-icons/gr'
import {motion} from 'framer-motion';

const Bar:FunctionComponent<{data:ISkill}> = ({data:{Icon,level,name}}) => {

     const variants={
         initial:{
             width:0
         },
         animate:{
             width:level,

            transition:{
                duration:0.4,
                type:"spring",
                damping:10,
                stiffness:100,
            }
            }
     }

    return (
        <div className="my-2  bg-gray-100 dark:bg-gray-800 rounded-full">
            <motion.div className="px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green-300 to-blue-500 h-10
            
            dark:from-darkButton-blue dark:to-darkButton-green
            
            dark:border-gray-700 border-2"
            
            style={{width:level}}

            variants={variants}
            initial="initial"
            animate="animate"
            >

                
                <GrCode className="mr-3 "/>
                {name}
            </motion.div>
        </div>
    )
}

export default Bar
