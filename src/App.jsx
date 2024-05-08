import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ArticlePage from "./page/ArticlePage/ArticlePage.jsx";
import Blog from "./page/Blog/Blog.jsx";
import Main from "./page/Main/Main.jsx";
import Projects from "./page/Projects/Projects.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Main/>}></Route>
              <Route path='blog' element={<Blog/>}></Route>
              <Route path='projects' element={<Projects/>}></Route>
              <Route path='article/:id' element={<ArticlePage/>}></Route>
          </Routes>
      </BrowserRouter>

  )
}

export default App
