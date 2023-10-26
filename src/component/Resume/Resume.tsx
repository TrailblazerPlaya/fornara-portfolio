import cls from "./Resume.module.scss";
import { useState } from "react";
import skills from "./data/SkillsData";
export const Resume = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
  
    const handleSkillClick = (skill: { name: string; description: string }) => {
      setSelectedSkill(skill);
    };
  
    const closeModal = () => {
      setSelectedSkill(null);
    };
  
    const handleOverlayClick = (event: any) => {
      if (event.target === event.currentTarget) {
        closeModal();
      }
    };
  
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
            {skills.map((skill) => (
              <li className={cls.ResumeLi} key={skill.name} onClick={() => handleSkillClick(skill)}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
        {selectedSkill && (
          <div className={cls.ModalOverlay} onClick={handleOverlayClick}>
            <div className={cls.Modal}>
              <div className={cls.ResumeContainer}>
                <img className={cls.ResumeIcons} src={selectedSkill.icon} alt={selectedSkill.name} />
                <h4 className={cls.ResumeName}>{selectedSkill.name}</h4>
                <button className={cls.ResumeClose} onClick={closeModal}>Закрыть</button>
              </div>
              <p className={cls.ResumeDescription}>{selectedSkill.description}</p>
            </div>
          </div>
        )}
      </div>
    );
  };