import { Metadata } from "next";

export const metadata : Metadata = {
    title: {
        absolute: 'Blog'
    }
} 

const Blog = () => {
    return (
        <h1>Blog Page</h1>
    )
}

export default Blog;