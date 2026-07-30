import "../../styles/layout/CvPreview.css";

export default function CvPreview(props) {
  return (
    <section className='cvPreview'>
      <h1>General Info</h1>
      <p>Name: {props.generalInfo.firstName + " " + props.generalInfo.lastName}
        Email: {props.generalInfo.email} Phone: {props.generalInfo.phone}
        Linked In: {props.generalInfo.linkedIn}
        Github: {props.generalInfo.github}
        Portfolio: {props.generalInfo.portfolio}
      </p>

      <h1 className={props.educationList.length === 0 ? "hidden" : "visible"}>Education</h1>
      <ul>
        {props.educationList.map((edu) => {
          return (
            <li key={edu.id}>
              School: {edu.schoolName}
              Study: {edu.study}
              Date: {edu.date}
            </li>
          )
        })}
      </ul>
      
      <h1 className={props.workList.length === 0 ? "hidden" : "visible"}>Work Experience</h1>
      <ul>
        {props.workList.map((work) => {
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
      
      <h1 className={props.skillList.length === 0 ? "hidden" : "visible"}>Skills</h1>
      <ul>
        {props.skillList.map((skill) => {
          return (
            <li key={skill.id}>{skill.skill}</li>
          )
        })}
      </ul>
      
      <h1 className={props.projectList.length === 0 ? "hidden" : "visible"}>Projects</h1>
      <ul>
        {props.projectList.map((project) => {
          return (
            <li key={project.id}>
              Title: {project.title}
              Description: {project.description}
              Start Date: {project.startDate}
              End Date: {project.endDate}
              <ul>
                {project.links.map((link) => {
                  return (
                    <li key={link.id}>
                      {link.title}: {link.url}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
      
      <h1 className={props.achievementList.length === 0 ? "hidden" : "visible"}>Achievements</h1>
      <ul>
        {props.achievementList.map((achievement) => {
          return (
            <li key={achievement.id}>{achievement.achievement}</li>
          )
        })}
      </ul>

      <h1 className={props.certificateList.length === 0 ? "hidden" : "visible"}>Certifications</h1>
      <ul>
        {props.certificateList.map((certificate) => {
          return (
            <li key={certificate.id}>
              Title: {certificate.title}
              Description: {certificate.description}
              Start Date: {certificate.startDate}
              End Date: {certificate.endDate}
              <ul>
                {certificate.links.map((link) => {
                  return (
                    <li key={link.id}>
                      {link.title}: {link.url}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>

      <h1 className={props.languageList.length === 0 ? "hidden" : "visible"}>Languages Known</h1>
      <ul>
        {props.languageList.map((language) => {
          return (
            <li key={language.id}>{language.language}</li>
          )
        })}
      </ul>
    </section>
  )
}