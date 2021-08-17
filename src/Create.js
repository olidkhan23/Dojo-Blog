import { useState } from "react";
import {useHistory} from "react-router-dom"

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuther] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
         const blog = {title, body, author};
         
        setIsPending(true);

         fetch('  http://localhost:8000/blogs', {
             method: 'POST',
             headers: {"Content-Type" : 'application/json'},
             body: JSON.stringify(blog)
         }).then(() =>{
            setIsPending(false);
            history.push("/");
         })
    }

    return ( 
        <div className="create">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text" 
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog auther:</label>
                <select
                value={author}
                onChange={(e) => setAuther(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                    <option value="olid">olid</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button>Adding blog...</button>}
            </form>

        </div>
     );
}
 
export default Create;