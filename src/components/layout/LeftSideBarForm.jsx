import GeneralInfo from '../forms/GeneralInfo.jsx';
import EducationalExpperience from '../forms/EducationExp.jsx';
import PracticalExperience from '../forms/PracticalExp.jsx';
import Skill from '../forms/Skill.jsx';
import Project from '../forms/Projects.jsx';
import Language from '../forms/Language.jsx';
import Achievement from '../forms/Achievement.jsx';
import Certificate from '../forms/Certification.jsx';

import "../../styles/layout/LeftSideBarForm.css";

export default function LeftSidebarForm(props) {
  return (
    <section className='leftSidebarForm'>
      <GeneralInfo
        generalInfo={props.generalInfo}
        setGeneralInfo={props.setGeneralInfo}
      />

      <EducationalExpperience educationList={props.educationList} setEducationList={props.setEducationList} />

      <PracticalExperience workList={props.workList} setWorkList={props.setWorkList} />

      <Skill skillList={props.skillList} setSkillList={props.setSkillList}/>

      <Project projectList={props.projectList} setProjectList={props.setProjectList}/>

      <Achievement achievementList={props.achievementList} setAchievementList={props.setAchievementList} />

      <Certificate certificateList={props.certificateList} setCertificateList={props.setCertificateList} />

      <Language languageList={props.languageList} setLanguageList={props.setLanguageList}/>

    </section>
  )
}