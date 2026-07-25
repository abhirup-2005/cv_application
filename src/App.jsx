import { useState } from 'react';
import GeneralInfo from './componenets/GeneralInfo.jsx';
import EducationalExpperience from './componenets/EducationExp.jsx';
import PracticalExperience from './componenets/PracticalExp.jsx';

function App() {
  const [generalInfo, setGeneralInfo] = useState({ firstName: "", lastName: "", email: "", phone: "", });

  const name = generalInfo.firstName + " " + generalInfo.lastName;

  const [educationList, setEducationList] = useState([]);

  const [workList, setWorkList] = useState([]);

  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <p>Name: {name} Email: {generalInfo.email} Phone: {generalInfo.phone}</p>

      <EducationalExpperience educationList={educationList} setEducationList={setEducationList} />
      <ul>
        {educationList.map((edu) => {
          return (
            <li key={edu.id}> School: {edu.schoolName} Study: {edu.study} Date: {edu.date}</li>
          )
        })}
      </ul>

      <PracticalExperience workList={workList} setWorkList={setWorkList} />
      <ul>
        {workList.map((work) => {
          return (
            <li key={work.id}> Company: {work.companyName} Position: {work.position} Responsibilities: {work.responsibilities} Start Date: {work.startDate} End Date: {work.endDate}</li>
          )
        })}
      </ul>
    </>
  )
}

export default App
