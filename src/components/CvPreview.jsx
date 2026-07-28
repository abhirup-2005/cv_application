export default function CvPreview(props) {
  return (
    <section className='cvPreview'>
      <p>Name: {props.generalInfo.firstName + " " + props.generalInfo.lastName}
        Email: {props.generalInfo.email} Phone: {props.generalInfo.phone}
        Linked In: {props.generalInfo.linkedIn}
        Github: {props.generalInfo.github}
        Portfolio: {props.generalInfo.portfolio}
      </p>

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

      <ul>
        {props.skillList.map((skill) => {
          return (
            <li key={skill.id}>{skill.skill}</li>
          )
        })}
      </ul>

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