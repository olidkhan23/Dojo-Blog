import { useParams, useHistory } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {

  const { id } = useParams();
  const history = useHistory();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch("  http://localhost:8000/blogs/" + id);

  const dleteBlog = () => {
    fetch('  http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() => {
        history.push('/');
    })
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading... </div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>
              {blog.body}
          </div>
        </article>
      )}
      <button onClick={ dleteBlog}>Delete blog</button>
    </div>
  );
};

export default BlogDetails;
