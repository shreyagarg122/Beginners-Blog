import { useState } from "react";
import { useHistory, useParams } from "react-router";
import useFetch from "./useFetch";

const Edit = () => {
    const {id}=useParams();
    const {data,isPending,error}= useFetch('http://localhost:8000/blogs/'+id);
    const [title,setTitle] = useState('');
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');  
    const [isLoading,setIsLoading]= useState(false);
    const history= useHistory();


    const handleEditor=(e)=>{
        e.preventDefault();
        const blog={title,body,author};
        console.log(blog);
        setIsLoading(true);
        
        fetch('http://localhost:8000/blogs/'+id,{
            method:'PATCH',
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then(()=>{
            setIsLoading(false);
            history.push('/blogs/'+id);
        })
    }


    return (
        <div className="editt">
            <h1>Original Blog</h1>
            <div className="details">
                {isPending && <div>Loading...</div>}
                {error && <div>{error}</div>}
                {data && (
                    <article>
                        <p>Title:{data.title}</p>
                        <p>Author: {data.author}</p>
                        <div>Body:{data.body}</div>   
                    </article>
                )}   
            </div>      
            <h2>Blog Editor</h2>
            <form onSubmit={handleEditor}> 
                <label>Blog Title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Body:</label>
                <textarea
                required
                value={body}
                onChange={(e)=>setBody(e.target.value)}
                ></textarea>
                <label>Author:</label>
                <input
                required
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                />
                {!isLoading && <button>Edit Blog</button>}
                {isLoading && <button>Editting..</button>}
            </form>
        </div>
      )
}
 
export default Edit;