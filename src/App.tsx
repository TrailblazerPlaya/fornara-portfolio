import { Suspense } from "react";
import "./index.scss";
const App = () => {
    return (
        <div className={"app"}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={"container"}>
                    <h1>Portfolio</h1>
                </div>
            </Suspense>
        </div>
    );
};
export default App;
