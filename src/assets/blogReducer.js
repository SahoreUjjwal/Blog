export function blogReducer(blogs,action){

    switch(action.type)
    {
        case "Add_Post":{
            return[...blogs,{
                title:action.title,
                content:action.content
            }]
        }

        case "Delete_Post":{
            return blogs.filter((blog,index)=>index!==action.key);
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }
    }

}