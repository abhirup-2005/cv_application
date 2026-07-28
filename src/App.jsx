import { useState } from 'react';
import LeftSidebarForm from './components/LeftSideBarForm.jsx';
import CvPreview from './components/CvPreview.jsx';
import HeaderBar from './components/HeaderBar.jsx';

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

  const [skillList, setSkillList] = useState([
    {
      id: crypto.randomUUID(),
      skill: "",
    }
  ])

  const [projectList, setProjectList] = useState([]);

  const [languageList, setLanguageList] = useState([]);

  const [showPreview, setShowPreview] = useState(false);

  return (
    <>
      <HeaderBar showPreview={showPreview} setShowPreview={setShowPreview} />

      <div className="mainContent">
        <div className={showPreview ? "hideMobile" : ""}>
          <LeftSidebarForm
            generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
            educationList={educationList} setEducationList={setEducationList}
            workList={workList} setWorkList={setWorkList}
            skillList={skillList} setSkillList={setSkillList}
            projectList={projectList} setProjectList={setProjectList}
            languageList={languageList} setLanguageList={setLanguageList}
          />
        </div>

        <div className={showPreview ? "" : "hideMobile"}>
          <CvPreview
            generalInfo={generalInfo}
            educationList={educationList}
            workList={workList}
            skillList={skillList}
            projectList={projectList}
            languageList={languageList}
          />
        </div>

      </div>
    </>
  )
}