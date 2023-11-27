import { useState,useEffect, FunctionComponent } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const NavItem:FunctionComponent<{
  
    activeItem:string
    setactiveItem:Function
    name:string
    route:string
}>=({ activeItem,name,route,setactiveItem})=>{
    return  activeItem !== name ? (
            <Link href={route}>
              <a className="transition duration-300 ease-in-out transform rounded-xl delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-blue-100  px-1 mx-0 dark:hover:bg-blueCustom-backgroundLight ">
                <span className="cursor-pointer  " onClick={()=>setactiveItem(name)}> {name}</span>
              </a>
            </Link>
          ):null

    
}

export const Navbar = () => {
  const [activeItem, setactiveItem] = useState("");
 


    const {pathname}=useRouter()
    
    
        
        useEffect(()=>{
          
            if(pathname==="/") setactiveItem("About")
            if(pathname==="/projects") setactiveItem("Projects")
            if(pathname==="/resume") setactiveItem("Resume")
            if(pathname==="/certificates") setactiveItem("Certificates")

        },[])
    
 
  return (
    <div className="flex justify-between px-5 py-3 my-3 pt-3 mt-0 bg-gradient-to-r from-green-200 to-blue-300 
    dark:from-blueCustom-backgroundDark  dark:to-blueCustom-backgroundLight
    ">
       

      <span className="font-bold text-greenCustom dark:text-pinkCustom lg:text-xl text-sm md:text-base  border-b-4 border-greenCustom   dark:border-greenCustom
       transition duration-300 ease-in-out transform  delay-50 hover:-translate-y-1 hover:scale-100 hover:bg-green-100 dark:hover:bg-blueCustom-backgroundLight px-2 rounded-md 
       animate-bounce-custom ">{activeItem}</span>

      <div className="text-blue-700 dark:text-blue-400 animate-bounce-custom  lg:text-lg md:text-base text-xs flex lg:space-x-2 space-x-0">
{/*         
        {activeItem !== "About" && (
          <Link href="/">
            <a>
            <span onClick={()=>setactiveItem('About')}> About</span>
            </a>
            </Link>
            )}
            
            {activeItem !== "Projects" && (
              <Link href="/projects">
              <a>
              <span onClick={()=>setactiveItem('Projects')}> Projects</span>
              </a>
              </Link>
              )}
              
              {activeItem !== "Resume" && (
                <Link href="/resume">
                <a>
                <span onClick={()=>setactiveItem('Resume')}> Resume</span>
                </a>
                </Link>
              )} */}

      
        <NavItem activeItem={activeItem}  setactiveItem={setactiveItem} name="About" route="/"></NavItem>
        <NavItem activeItem={activeItem}  setactiveItem={setactiveItem} name="Projects" route="/projects"></NavItem>
        <NavItem activeItem={activeItem}  setactiveItem={setactiveItem} name="Resume" route="/resume"></NavItem>
        <NavItem activeItem={activeItem}  setactiveItem={setactiveItem} name="Certificates" route="/certificates"></NavItem>
        <NavItem activeItem={activeItem}  setactiveItem={setactiveItem} name="Experience" route='/experience'></NavItem>
      </div>
              
    </div>
  );
};
