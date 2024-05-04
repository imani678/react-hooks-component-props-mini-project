import React from "react";
import blogData from "../data/blog";
import Header from "../components/Header";
import About from "../components/About";
import List from "../components/ArticleList";
console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <List/>
    </div>
  );
}

export default App;
