
import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const NavItem:FunctionComponent<{value:Category |'All', handlerFilterCategory:Function
  active:string
}> = ({value,handlerFilterCategory,active}) => {

        let className ="cursor-pointer hover:text-blue-700 capitalize dark:hover:text-blue-400  sm:text-lg text-light";
        
        if(active===value){
             className=className+" text-greenCustom dark:text-pinkCustom sm:text-lg text-normal underline "
        }
    return (
        <ul>

        <li  className={className}
          onClick={()=>handlerFilterCategory(value)}
          >
            {value}
        </li>
            </ul>
    )
}

const ProjectsNavbar:FunctionComponent<{handlerFilterCategory:Function,active:string}> = (props) => {
    return (
        <div className="flex sm:space-x-3 space-x-1 px-3  py-2 list-none overflow-x-auto"> 
                <NavItem value="All"  {...props}/>
                {/* <NavItem value="MERN"  {...props}/>
                <NavItem value="React"  {...props}/>
                <NavItem value="ML"  {...props}/>
                <NavItem value="Basic"  {...props}/> */}
                
        </div>
    )
}

export default ProjectsNavbar
