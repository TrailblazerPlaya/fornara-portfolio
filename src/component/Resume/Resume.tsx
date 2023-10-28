import cls from "./Resume.module.scss";
import { useState } from "react";
import  skills from "./data/SkillsData";
import  aboutMe from "./data/AboutMe";
export const Resume = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [showModal, setShowModal] = useState(null);
    const handleSkillClick = (skill: { name: string; description: string }) => {
      setSelectedSkill(skill);
    };

    const handleAboutClick = (about: { name: string; description: string }) => {
      setShowModal(about);
    };
  
    const closeModal = () => {
      setSelectedSkill(null);
      setShowModal(null);
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
          {aboutMe.map((about) => (
            <p className={cls.ResumeExpiriens} key={about.name} onClick={() => handleAboutClick(about)}>{about.name}</p>
          ))}
          {showModal && (
            <div className={cls.ModalOverlay} onClick={handleOverlayClick}>
              <div className={cls.Modal}>
                <div className={cls.ResumeContainer}>
                  <h4>Fornara</h4>
                  <button className={cls.ResumeClose} onClick={closeModal}>Закрыть</button>
                </div>
                <p className={cls.ResumeDescription}>{showModal.description}</p>
                <p className={cls.ResumeDescription}>{showModal.practice}</p>
                <a className={cls.ResumeLink} href={showModal.link}>Ссылка</a>
              </div>
            </div>
          )}
          <hr />          
        </div>
        <div className={cls.ResumeSkills}>
          <ul>
            <h4>Stack</h4>
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