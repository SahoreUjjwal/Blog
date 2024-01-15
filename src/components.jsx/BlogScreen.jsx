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
            <div>
                <InputForm titleRef={titleRef} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
            </div>
            <AllBlogs blogs={blogs} deletePost={deletePost}/>
        </>
    )
}