import Intro from "./components/intro/index";
import "./app.scss";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";

function App() {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
        </div>
    );
}

export default App;
