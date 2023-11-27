import { FunctionComponent } from "react";

import { IService } from "../type";

const ServiceCard: FunctionComponent<{ service: IService }> = ({
  service: { Icon, about, title },
}) => {

    const createMarkup=()=>{

        return{
            __html:about,
        }
    
    }
  return (
    <div className=" flex items-center space-x-6 p-2 ">
     
     

      <Icon className="h-12 w-2/12 text-greenCustom  dark:text-pinkCustom  " />
     
    
      <div className="w-10/12 ">
    
        <h4 className=" px-2 text-green-800 dark:text-pinkCustom font-bold ">{title}</h4>
        <p dangerouslySetInnerHTML={createMarkup()} className="font-normal"></p>
    
      </div>
    
    </div>
  );
};

export default ServiceCard
