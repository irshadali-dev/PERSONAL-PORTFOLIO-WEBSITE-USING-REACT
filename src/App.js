import Intro from "./components/intro/index";
import "./app.scss";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Blogs from "./components/blogs";
import Contact from "./components/contact";

function App() {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
        </div>
    );
}

export default App;
