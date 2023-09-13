const Blog = ({ blog }) => {
  console.log(blog);
  const {author,author_img,cover,hashtags,posted_date,reading_time,title} = blog;
  return (
    <div>
      <img src={cover} alt="" />
      <div>
        <div className="flex items-center gap-4">
            <img src={author_img} alt="" className="w-14"/>
            <div>
                <h3>{author}</h3>
                <p>{posted_date}</p>
            </div>
        </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Blog;
