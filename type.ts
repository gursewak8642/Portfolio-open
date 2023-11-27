
import {IconType} from 'react-icons'
export interface IService{
    title:string,
    about:string,
    Icon: IconType
}


export interface ISkill{
    name:string,
level:string,
Icon:IconType
}


export interface IProject{
    id:number;
    name:string;
    description:string;
    image_path:string;
    deployed_url:string;
    github_url:string;
    category:Category[];
    key_techs:string[];
}


export interface ICertificates{
    name:string,
    description:string,
    type:string,
    Icon:IconType,
    
    date:string,
    
    url:string

}

export type Category="All" | "MERN" | "React" | "ML" | "Basic" ;

