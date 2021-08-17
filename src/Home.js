import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
/*   const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]); */
const {data:blogs, isPending, error} = useFetch('  http://localhost:8000/blogs');

  return (
    <div className="home">
        {error && <div>{error.message}</div>}
        {isPending && <div> Loading... </div>}
      { blogs && <BlogList blogs={blogs} title="All Blogs" />}
      {/* //<BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"  onClickDeleteBlog = {onClickDeleteBlog}/> */}
    </div>
  );
};

export default Home;
