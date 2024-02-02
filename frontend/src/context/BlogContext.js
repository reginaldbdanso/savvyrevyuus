import { createContext, useReducer } from "react";

export const BlogContext = createContext();

const BlogReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BLOGS':
            return {
                blogs: action.payload
            }
        case 'CREATE_BLOG':
            return {
                blogs: [action.payload, ...state.blogs]
            }
        case 'DELETE_BLOG':
            return {
                blogs: state.blogs.filter((blog) => blog._id !== action.payload)
            }
        default:
            return state;
    }
}

export const MyBlogContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(BlogReducer, {
        blogs: null
    })

    return (
        <BlogContext.Provider value={{...state, dispatch}}>
            { children }
        </BlogContext.Provider>
    )

}