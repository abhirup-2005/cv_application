import { useRef, useState } from 'react';
import LeftSidebarForm from './components/layout/LeftSideBarForm.jsx';
import CvPreview from './components/layout/CvPreview.jsx';
import HeaderBar from './components/layout/HeaderBar.jsx';

import './styles/App.css'

export default function App() {
  const [generalInfo, setGeneralInfo] = useState(
    {
      firstName: "", lastName: "",
      email: "", phone: "",
      linkedIn: "", github: "",
      portfolio: "",
      links: [
        {
          id: crypto.randomUUID(),
          title: "",
          url: "",
        },
      ],
    }
  );

  const [educationList, setEducationList] = useState([
    {
      id: crypto.randomUUID(),
      schoolName: "",
      study: "",
      place: "",
      grade: "",

      durationType: "date",

      startDate: "",
      endDate: "",

      customDuration: "",

      isCurrent: false,
    }
  ]);

  const [workList, setWorkList] = useState([
    {
      id: crypto.randomUUID(),
      companyName: "",
      position: "",
      responsibilities: "",

      durationType: "date",

      startDate: "",
      endDate: "",

      customDuration: "",

      isCurrent: false,
    }
  ]);

  const [skillList, setSkillList] = useState([])

  const [projectList, setProjectList] = useState([]);

  const [languageList, setLanguageList] = useState([]);

  const [achievementList, setAchievementList] = useState([]);

  const [certificateList, setCertificateList] = useState([]);

  const [showPreview, setShowPreview] = useState(false);

  const cvRef = useRef(null);

  return (
    <>
      <HeaderBar
        showPreview={showPreview} setShowPreview={setShowPreview}
        cvRef={cvRef} //Now HeaderBar can print that element.
      />

      <div className="mainContent">
        <div className={showPreview ? "hideMobile" : ""}>
          <LeftSidebarForm
            generalInfo={generalInfo} setGeneralInfo={setGeneralInfo}
            educationList={educationList} setEducationList={setEducationList}
            workList={workList} setWorkList={setWorkList}
            skillList={skillList} setSkillList={setSkillList}
            projectList={projectList} setProjectList={setProjectList}
            languageList={languageList} setLanguageList={setLanguageList}
            achievementList={achievementList} setAchievementList={setAchievementList}
            certificateList={certificateList} setCertificateList={setCertificateList}
          />
        </div>

        <div className={showPreview ? "" : "hideMobile"}>
          <CvPreview
            ref={cvRef} //This is the component I want to print.

            generalInfo={generalInfo}
            educationList={educationList}
            workList={workList}
            skillList={skillList}
            projectList={projectList}
            languageList={languageList}
            achievementList={achievementList}
            certificateList={certificateList}
          />
        </div>

      </div>
    </>
  )
}