import Achievement from "./Achievement"

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

      <h1>Education</h1>
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
      
      <h1>Work Experience</h1>
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
      
      <h1>Skills</h1>
      <ul>
        {props.skillList.map((skill) => {
          return (
            <li key={skill.id}>{skill.skill}</li>
          )
        })}
      </ul>
      
      <h1>Projects</h1>
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
      
      <h1>Achievements</h1>
      <ul>
        {props.achievementList.map((achievement) => {
          return (
            <li key={achievement.id}>{achievement.achievement}</li>
          )
        })}
      </ul>

      <h1>Certifications</h1>
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

      <h1>Languages Known</h1>
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