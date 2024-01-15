import { InputForm } from "./InputForm"
import { AllBlogs } from "./AllBlogs"
import { useRef, useState } from "react"

export function BlogScreen(){

    const[formData,setFormData] = useState({});
    const[blogs,setBlogs] = useState([]);
    const titleRef = useRef(null);


    const handleSubmit=(e)=>{
        console.log("Hello");
        e.preventDefault();
        setBlogs([{
            title:formData.title,
            content:formData.content
        },...blogs])
        setFormData({
            title:"",
            content:""
            
        })
        titleRef.current.focus();
    }



    return( <> 
            <div>
                <InputForm titleRef={titleRef} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit}/>
            </div>
            <AllBlogs blogs={blogs}/>
        </>
    )
}