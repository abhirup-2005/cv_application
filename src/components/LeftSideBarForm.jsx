import GeneralInfo from './GeneralInfo.jsx';
import EducationalExpperience from './EducationExp.jsx';
import PracticalExperience from './PracticalExp.jsx';
import Skill from './Skill.jsx';
import Project from './Projects.jsx';
import Language from './Language.jsx';
import Achievement from './Achievement.jsx';
import Certificate from './Certification.jsx';

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