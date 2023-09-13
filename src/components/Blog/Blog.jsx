const Blog = ({ blog }) => {
  console.log(blog);
  const {author,author_img,cover,hashtags,posted_date,reading_time,title} = blog;
  return (
    <div className=" my-4 p-3 rounded-lg">
      <img src={cover} alt="" className="w-full rounded-lg"/>
      <div className="flex justify-between">
        {/* left side */}
        <div className="flex items-center gap-4">
            <img src={author_img} alt="" className="w-14"/>
            <div>
                <h3>{author}</h3>
                <p>{posted_date}</p>
            </div>
        </div>

    {/* right side */}
        <div className="flex items-center gap-3">
          <p>{reading_time} Min Read</p>
          <button className="font-bold text-2xl">B</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
