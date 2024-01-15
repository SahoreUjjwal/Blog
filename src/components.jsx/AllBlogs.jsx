export function AllBlogs(props){
    const {blogs} = props;
    return(
        <>
            {blogs.map((blog,index)=>(<div key={index}>
                <h4>{blog.title}</h4>
                <p>{blog.content}</p>
            </div>))}
        </>
    )
}
