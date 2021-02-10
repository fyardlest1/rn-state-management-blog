import CreateDataContext from "./createDataContext";

const reducer = (state, action) => {
    switch (action.type) {
        case 'add_blogpost':            
            return [...state, { 
                id: Math.floor(Math.random() * 99999),
                title: action.payload.title,
                content: action.payload.content
             }]    
        case 'edit_blogpost':            
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost
                // if (blogPost.id === action.payload.id) {
                //     return action.payload
                // } else {
                //     return blogPost
                // }
            })
        case 'delete_blogpost':            
            return state.filter((blogPost) => blogPost.id !== action.payload)
        default:
            return state;
    }
}

// create and add a blog post
const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } })
        if (callback) {
            callback()
        }
    }
}

// delete a blog post
const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', payload: id })
    }
}

// delete a blog post
const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({ type: 'edit_blogpost', payload: {id, title, content} })
        if (callback) {
            callback()
        }
    }
}

export const { Context, Provider } = CreateDataContext(
    reducer, { addBlogPost, deleteBlogPost, editBlogPost }, 
    [{ title: 'TEST POST', content: 'TESTING YAYAD as LA-GOUYAD', id: 1 }]
)