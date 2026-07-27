import GeneralInfo from './GeneralInfo.jsx';
import EducationalExpperience from './EducationExp.jsx';
import PracticalExperience from './PracticalExp.jsx';

export default function LeftSidebarForm(props) {
  return (
    <section className='leftSidebarForm'>
      <GeneralInfo
        generalInfo={props.generalInfo}
        setGeneralInfo={props.setGeneralInfo}
      />

      <EducationalExpperience educationList={props.educationList} setEducationList={props.setEducationList} />

      <PracticalExperience workList={props.workList} setWorkList={props.setWorkList} />
    </section>
  )
}