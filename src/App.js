import Intro from "./components/intro/index";
import "./app.scss";
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";

function App() {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
        </div>
    );
}

export default App;
