export function AllBlogs(props){
    const {blogs,deletePost} = props;
    return(
        <>
            {blogs.map((blog,index)=>(<div key={index}>
                <h4>{blog.title}</h4>
                <p>{blog.content}</p>
                <button onClick={()=>deletePost(index)}>Delete</button>
            </div>))}
        </>
    )
}
