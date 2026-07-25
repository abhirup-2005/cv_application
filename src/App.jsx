import { useState } from 'react';
import GeneralInfo from './componenets/GeneralInfo.jsx';

import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const name = generalInfo.firstName + " " + generalInfo.lastName;

  return (
    <>
      <GeneralInfo
        generalInfo={generalInfo}
        setGeneralInfo={setGeneralInfo}
      />
      <p>{name}{" "}{generalInfo.email}{" "}{generalInfo.phone}</p>

    </>
  )
}

export default App
