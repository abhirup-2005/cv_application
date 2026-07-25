import { useState } from 'react';
import GeneralInfo from './componenets/GeneralInfo.jsx';
import EducationalExpperience from './componenets/EducationExp.jsx';
import PracticalExperience from './componenets/PracticalExp.jsx';

function App() {
  const [generalInfo, setGeneralInfo] = useState(
    { 
      firstName: "",  lastName: "", 
      email: "", phone: "",
      linkedIn: "", github: "",
      portfolio: "",
    }
  );

  const [educationList, setEducationList] = useState([
    { 
      id: crypto.randomUUID(), 
      schoolName: "", 
      study: "", 
      date: "", 
    }
  ]);

  const [workList, setWorkList] = useState([
    { 
      id: crypto.randomUUID(), 
      companyName: "", 
      position: "", 
      responsibilities: "", 
      startDate: "", 
      endDate: "",
    }
  ]);

  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <p>Name: {generalInfo.firstName + " " + generalInfo.lastName}
        Email: {generalInfo.email} Phone: {generalInfo.phone}
        Linked In: {generalInfo.linkedIn}
        Github: {generalInfo.github}
        Portfolio: {generalInfo.portfolio}
      </p>

      <EducationalExpperience educationList={educationList} setEducationList={setEducationList} />
      <ul>
        {educationList.map((edu) => {
          return (
            <li key={edu.id}> 
            School: {edu.schoolName} 
            Study: {edu.study} 
            Date: {edu.date}
            </li>
          )
        })}
      </ul>

      <PracticalExperience workList={workList} setWorkList={setWorkList} />
      <ul>
        {workList.map((work) => {
          return (
            <li key={work.id}> 
            Company: {work.companyName} 
            Position: {work.position} 
            Responsibilities: {work.responsibilities} 
            Start Date: {work.startDate} 
            End Date: {work.endDate}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
