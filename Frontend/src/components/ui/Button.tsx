import { ReactElement } from "react";
type Variants="primary"|"secondary";
export interface ButtonProps{
    variant:Variants;
    size:"sm"|"md"|"lg";
    text:string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick:()=>void;

}
const variantStyles={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-300 text-purple-600",
}
const sizeStyles={
    "sm":"py-1 px-2 rounded-sm",
    "md":"py-2 px-4 rounded-md",
    "lg":"py-4 px-8 rounded-xl ",
}
const defaultStyles="rounded-md flex";

export const Button=(props:ButtonProps)=>{
   return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}>
    <div className="flex items-center justify-center"> 
        {props.startIcon?<div className="pr-2">{props.startIcon}</div>:null}
        {props.text}
        {props.endIcon?<div className="pl-2">{props.endIcon}</div>:""}
        </div>
    </button>


}


