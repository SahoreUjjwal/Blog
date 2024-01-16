export function InputForm(props){
    const {handleSubmit,formData,setFormData,titleRef} = props; 
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="my-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900" htmlFor="title">Title</label>
                    <input placeholder = "Title" className="block w-96 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" ref={titleRef} value = {formData.title} onChange={(e)=>{setFormData({
                                                                                                title:e.target.value,
                                                                                                content:formData.content                    
                                                                                            })}}/>
                </div>
                <div className="my-2">
                    <label htmlFor="Content">Content</label>
                    <textarea placeholder="Content" rows="10" cols="50" className="block w-96 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none" required value={formData.content} onChange={(e)=>{setFormData({
                                                                                        title:formData.title,
                                                                                        content:e.target.value
                                                                                    })}}></textarea>

                </div>
                <div className="relative">
                <input className="border w-24 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-700 ..." type="submit" />
                </div>
                  
             
               
            </form>
        </>
    )
}