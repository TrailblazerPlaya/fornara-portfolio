import { Suspense } from "react";
import "./style/index.scss";
import { Header } from "./component/Header/Header";
import { About } from "./component/About/About";
import { Portfolio } from "./component/Portfolio/Portfolio";
import { Contact } from "./component/Contact/Contact";
const App = () => {
    return (
        <div className={"app"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <About />
                <Portfolio />
                <Contact />
            </Suspense>
        </div>
    );
};
export default App;
