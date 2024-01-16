import { InputForm } from "./InputForm"
import { AllBlogs } from "./AllBlogs"
import { useReducer, useRef,useState } from "react";
import {blogReducer} from "../assets/blogReducer";

export function BlogScreen(){

    const [formData,setFormData] = useState({title:"",content:""});
    const [blogs,dispatch] = useReducer(blogReducer,[]);
    const titleRef = useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch({
            type:'Add_Post',
            content:formData.title,
            title:formData.content
        })
        setFormData({
            title:"",
            content:""
        })
        titleRef.current.focus();
    }
    const deletePost=(key)=>{
        dispatch({
            type:'Delete_Post',
            key:key
        })
    }


    return( <> 
            <div className="pb-2 flex w-full flex-row content-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... rounded-lg">
                <InputForm titleRef={titleRef} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
            </div>
            <div className ="my-2">
                <AllBlogs blogs={blogs} deletePost={deletePost}/>
            </div>
            
        </>
    )
}