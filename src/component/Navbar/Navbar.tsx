import cls from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <div className={cls.Navbar}>
            <div>
                <h2>Fornara project</h2>
            </div>
            <div className={cls.NavLinks}>
                <a href="https://github.com/Fornara" target="_blank">GitHub</a>
                <a href="https://t.me/fornara_the_great" target="_blank">Telegram</a>
                <a href="https://vk.com/id666510696" target="_blank">Vk</a>
            </div>
        </div>
        
    );
};
