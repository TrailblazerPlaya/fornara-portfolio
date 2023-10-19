import cls from "./Resume.module.scss";

export const Resume = () => {
    return (
        <div className={cls.Resume}>
            <div className={cls.ResumeAbout}>
                <h3>Николай Чубаков</h3>
                <p>Frontend Developer</p>
                <p>Age: 22 y.o</p>
                <p>Location: Russia, Saratov</p>
            </div>
            <div className={cls.ResumeSkills}>
                <ul>
                    <h4>Кликабельно</h4>
                    <hr />
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Webpack</li>
                    <li>Git</li>
                    <li>Feature-sliced design</li>
                </ul>
            </div>
        </div>
    );
};
