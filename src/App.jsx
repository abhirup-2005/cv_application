import { useState } from 'react';
import LeftSidebarForm from './componenets/LeftSideBarForm.jsx';
import CvPreview from './componenets/CvPreview.jsx';
import HeaderBar from './componenets/HeaderBar.jsx';

import './styles/App.css'

export default function App() {
  const [generalInfo, setGeneralInfo] = useState(
    {
      firstName: "", lastName: "",
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
      <HeaderBar />

      <LeftSidebarForm
        generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
        educationList={educationList} setEducationList={setEducationList}
        workList={workList} setWorkList={setWorkList}
      />

      <CvPreview 
        generalInfo={generalInfo}
        educationList={educationList}
        workList={workList}
      />
    </>
  )
}