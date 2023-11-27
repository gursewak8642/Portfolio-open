import { FunctionComponent } from "react";
import { ICertificates } from "../type";

const CertificateCard: FunctionComponent<{ certificate: ICertificates }> = ({
  certificate: {
    name,
    description,
    type,
    Icon,
    date,
    url,
  },
}) => {
  
  return (
    <div className=" flex items-center space-x-1 p-1 shadow-greenCustom shadow-3xl ">
      <Icon className="h-12 w-2/12 text-greenCustom  dark:text-pinkCustom  " />

      <div className="w-10/12 ">
        <h6 className=" px-2 font-normal text-s  leading-none py-1 lg:font-bold md:font-semibold  text-green-800 dark:text-pinkCustom ">
          {name}
        </h6>
        <p className="font-normal text-sm lg:text-base px-1 md:text-normal leading-snug  " >{description}</p>
        <div className="top-0">
          <span className=" lg:font-medium font-normal   text-blue-900 lg:px-4 px-2 dark:text-green-200 bg-green-300 rounded-2xl dark:bg-blue-800">{date}</span>
        
        <a href={url} target="_blank" className=" lg:px-4 px-2 text-blue-700 lg:font-medium font-normal underline  hover:text-blue-900 ">See Credentials</a>

        </div>

      
      </div>
    </div>
  );
};

export default CertificateCard;
