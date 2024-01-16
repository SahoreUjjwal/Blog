export function AllBlogs(props){
    const {blogs,deletePost} = props;
    return(
        <>
            {blogs.map((blog,index)=>(<div className="pl-4 flex flex-col border rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ..." key={index}>
                <div className="my-2">
                    <h2><span><strong>Title: </strong></span><span>{blog.title}</span></h2>
                </div>
                <div>
                    <p><span><strong>Content: </strong></span>{blog.content}</p>
                </div>
                <button className="my-2 border w-24 h-12 rounded-lg bg-gradient-to-r from-red-500 to-red-600 ..." onClick={()=>deletePost(index)}>Delete</button>
            </div>))}
        </>
    )
}
