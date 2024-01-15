export function InputForm(props){
    const {handleSubmit,formData,setFormData,titleRef} = props; 
    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" ref={titleRef} value = {formData.title} onChange={(e)=>{setFormData({
                                                                                            title:e.target.value,
                                                                                            content:formData.content                    
                                                                                        })}}/>
                <label htmlFor="Content">Content</label>
                <input type="text" required value={formData.content} onChange={(e)=>{setFormData({
                                                                                                    title:formData.title,
                                                                                                    content:e.target.value
                                                                                                })}}/>
                <input type="submit" />
            </form>
        </>
    )
}