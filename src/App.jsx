import "./App.css";
import Header from "./components/header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex items-center justify-center">
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>

    </div>
  );
}

export default App;
