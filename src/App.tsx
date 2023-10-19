import { Navbar } from "./component/Navbar/Navbar";
import { Suspense } from "react";
import "./index.scss";
import { Background } from "./component/Background/Background";
import { Resume } from "./component/Resume/Resume";
const App = () => {
    return (
        <div className={"app"}>
            <Suspense fallback={<div>Loading...</div>}>
                <Background />
                <div className={"container"}>
                    <Navbar />
                    <Resume />
                </div>
            </Suspense>
        </div>
    );
};
export default App;