import { forwardRef } from "react"; //Normally React components cannot receive refs. Have to "forward" the ref.

import "../../styles/layout/CvPreview.css";

const CvPreview = forwardRef((props, ref) => { //<CvPreview ref={cvRef}/> doesn't automatically work.
  function getDuration(entry) {

    if (entry.durationType === "custom")
      return entry.customDuration;

    if (entry.isCurrent)
      return `${entry.startDate} - Present`;

    return `${entry.startDate}${entry.startDate && entry.endDate ? " - " : ""}${entry.endDate}`;
  }

  return (
    <section
      ref={ref}
      className="cvPreview"
    >
      {/* ================= HEADER ================= */}

      <header className="cv-header">

        <h1 className="cv-name">
          {props.generalInfo.firstName} {props.generalInfo.lastName}
        </h1>

        <div className="cv-contact">

          {props.generalInfo.phone && (
            <span>{props.generalInfo.phone}</span>
          )}

          {props.generalInfo.email && (
            <span>
              <a
                href={`mailto:${props.generalInfo.email}`}
                target="_blank"
                rel="noreferrer"
              >
                {props.generalInfo.email}
              </a>
            </span>
          )}

          {props.generalInfo.links
            .filter(link => link.title && link.url)
            .map((link) => (
              <span key={link.id}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.title === "Other" ? link.customTitle : link.title}
                </a>
              </span>
            ))}
        </div>

        {props.generalInfo.bio && (
          <p className="cv-summary">
            {props.generalInfo.bio}
          </p>
        )}

      </header>

      {/* ================= EDUCATION ================= */}

      {props.educationList.length > 0 && (
        <>
          <h2 className="cv-section-title">Education</h2>

          {props.educationList.map((edu) => (
            <div className="entry" key={edu.id}>

              <div className="entry-header">

                <div className="entry-left">
                  <h3>{edu.schoolName}</h3>
                </div>

                <div className="entry-right">
                  <p>{edu.place}</p>
                </div>

              </div>

              <div className="entry-subheader">

                <div className="entry-left">
                  <em>{edu.study}</em>

                  {edu.grade && (
                    <>
                      {" • "}
                      <span>{edu.grade}</span>
                    </>
                  )}
                </div>

                <div className="entry-right">
                  <p>{getDuration(edu)}</p>
                </div>

              </div>

            </div>
          ))}
        </>
      )}

      {/* ================= EXPERIENCE ================= */}

      {props.workList.length > 0 && (
        <>
          <h2 className="cv-section-title">Experience</h2>

          {props.workList.map((work) => (
            <div className="entry" key={work.id}>

              <div className="entry-header">

                <div className="entry-left">
                  <h3>{work.position}</h3>
                </div>

                <div className="entry-right">
                  <p>{getDuration(work)}</p>
                </div>

              </div>

              <div className="entry-subheader">

                <div className="entry-left">
                  <em>{work.companyName}</em>
                </div>

              </div>

              {work.responsibilities && (
                <ul className="bullet-list">

                  {work.responsibilities
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}

                </ul>
              )}

            </div>
          ))}
        </>
      )}

      {/* ================= PROJECTS ================= */}

      {props.projectList.length > 0 && (
        <>
          <h2 className="cv-section-title">Projects</h2>

          {props.projectList.map((project) => (
            <div className="entry" key={project.id}>

              <div className="entry-header">

                <div className="entry-left">
                  <h3>{project.title}</h3>
                </div>

                <div className="entry-right">
                  <p>{getDuration(project)}</p>
                </div>

              </div>

              {project.links.length > 0 && (
                <div className="project-links">

                  {project.links.map((link, index) => (
                    <span key={link.id}>
                      {index !== 0 && " | "}
                      {link.title === "Other" ? link.customTitle : link.title}
                    </span>
                  ))}

                </div>
              )}

              {project.description && (
                <ul className="bullet-list">
                  {project.description
                    .split("\n")
                    .filter((line) => line.trim() !== "")
                    .map((line, index) => (
                      <li key={index}>{line}</li>
                    ))}
                </ul>
              )}

            </div>
          ))}
        </>
      )}

      {/* ================= TECHNICAL SKILLS ================= */}

      {props.skillList.length > 0 && (
        <>
          <h2 className="cv-section-title">Technical Skills</h2>

          <div className="skills-container">
            {props.skillList.map((category) => (
              <div className="skill-category" key={category.id}>
                <span className="skill-category-title">
                  {category.category}:
                </span>

                <span className="skill-category-skills">
                  {category.skills.map((skill) => skill.name).join(", ")}
                </span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ================= ACHIEVEMENTS ================= */}

      {props.achievementList.length > 0 && (
        <>
          <h2 className="cv-section-title">Achievements</h2>

          <ul className="bullet-list">

            {props.achievementList.map((achievement) => (
              <li key={achievement.id}>
                {achievement.achievement}
              </li>
            ))}

          </ul>
        </>
      )}

      {/* ================= CERTIFICATES ================= */}

      {props.certificateList.length > 0 && (
        <>
          <h2 className="cv-section-title">Certifications</h2>

          {props.certificateList.map((certificate) => (
            <div className="entry" key={certificate.id}>

              <div className="entry-header">

                <div className="entry-left">
                  <h3>{certificate.title}</h3>
                </div>

                <div className="entry-right">
                  <p>{getDuration(certificate)}</p>
                </div>

              </div>

              {certificate.description && (
                <p className="certificate-description">
                  {certificate.description}
                </p>
              )}

              {certificate.links.length > 0 && (
                <div className="certificate-links">

                  {certificate.links.map((link) => (
                    <div key={link.id}>
                      <strong>{link.title}</strong>: {link.url}
                    </div>
                  ))}

                </div>
              )}

            </div>
          ))}
        </>
      )}

      {/* ================= LANGUAGES ================= */}

      {props.languageList.length > 0 && (
        <>
          <h2 className="cv-section-title">Languages</h2>

          <div className="languages-container">

            {props.languageList.map((language, index) => (
              <span key={language.id}>
                {language.language}
                {index !== props.languageList.length - 1 ? " • " : ""}
              </span>
            ))}

          </div>
        </>
      )}

    </section>
  );
})

export default CvPreview;