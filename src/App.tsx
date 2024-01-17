import { Suspense } from "react";
import "./style/index.scss";
import { Header } from "./component/Header/Header";
const App = () => {
    return (
        <div className={"app"}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={"container"}>
                    <Header />
                </div>
            </Suspense>
        </div>
    );
};
export default App;
