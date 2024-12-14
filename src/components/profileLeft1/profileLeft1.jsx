import React, { useState } from "react";
import styles from "./profileLeft1.module.css";
import UniversityIcon from "./university.png";
import Card from "../Card/card";
import EditAboutPopup from "../EditAboutPopup/EditAboutPopup";
import WorkExperienceForm from "../WorkExperienceForm/WorkExperienceForm";
import EducationForm from "../EducationForm/EducationForm";
import EditProfilePopup from "../EditProfilePopup/EditProfilePopup";
// import ProjectHistoryForm from "../ProjectHistoryForm/ProjectHistoryForm";
import WorkForForm from "../WorkForForm/WorkForForm";
import EditIcon from "../../CustomIcons/EditIcon";
import PlusIcon from "../../CustomIcons/PlusIcon";
import DeleteIcon from "../../CustomIcons/DeleteIcon";
import DeleteComponent from "../../components/DeleteComponent/DeleteComponent"


const userData = {
  profile: {
    name: "Abdullah Ali",
    specialization: "Full-Stack Developer",
    selfie: "/avatar.png",
  },
  about: {
    text: "As a dedicated software developer with a passion for clean code and efficient problem-solving, I thrive on creating robust applications that improve user experience and drive business goals. My expertise lies in backend development, database management, and scalable architecture. I am always eager to learn new technologies and stay updated with the latest trends in the tech world. I believe in the power of collaboration and enjoy working in teams to achieve project goals.",
  },
  education: [
    {
      university: "University of Baghdad",
      date: "22 Jan 2023 - 11 May 2032",
      duration: "3 mos 20 days",
      college: "Information & Communication Engineering, Al-Khwarizmi College",
    },
  ],
  projects: [
    {
      name: "project Name",
      date: "22 Jan 2023 - 11 May 2032",
      duration: "3 mos 20 days",
      description:
        "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently.",
    },
    {
      name: "project Name",
      date: "01 June 2022 - 20 Oct 2023",
      duration: "1 year 4 months",
      description:
        "Built an e-commerce platform with features such as product listing, cart, checkout, and payment gateway integration.",
    },
  ],
  workExperience: [
    {
      name: "project Name",
      date: "01 Feb 2020 - 01 Jan 2023",
      duration: "2 years 11 months",
      description:
        "Worked on building scalable web applications and improving user interface designs for various clients.",
    },
    {
      name: "project Name",
      date: "01 Mar 2018 - 01 Jan 2020",
      duration: "1 year 10 months",
      description:
        "Focused on frontend development using React.js, HTML, CSS, and JavaScript to enhance user experience.",
    },
  ],
};
// const WorkFor = [
//   {
//     name: "company Name One",
//     date: "22 Jan 2024 - 11 May  2024.",
//     duration: "3 months",
//     description: "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. ",
//   },
//   {
//     name: "company Name Two",
//     date: "22 Jan 2024 - 11 May  2024.",
//     duration: "3 months",
//     description: "Developed a task management web application designed to help users organize, prioritize, and track their daily tasks efficiently. ",
//   },
// ];

function ProfileLeft1() {
  const { profile, about, education, projects, workExperience } = userData;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isAboutFormOpen, setIsAboutFormOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(false);
  const [isWorkExperienceOpen, setIsWorkExperienceOpen] = useState(false);
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);
  const [isProjectHistoryOpen, setIsProjectHistoryOpen] = useState(false);
  // const [isWorkForOpen, setIsWorkForOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(true);
  const [showDelete, setshowDelete] = useState(false)
  const [messageDelete, setmessageDelete] = useState("")

  function ShowDelete (message){
    setmessageDelete(message);
    setshowDelete(true)
  }
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.container}>
      {/* Profile Section */}
      <Card>
        <EditProfilePopup
          isOpen={isProfileFormOpen}
          onClose={() => setIsProfileFormOpen(false)}
        />
        <div className={styles.box1}>
          <div className={styles.part1PictureName}>
            <img className={styles.selfie} src="/avatar.png" alt="Profile" />
            <div className={styles.nameSpecialization}>
              <p className={styles.name}>{profile.name}</p>
              <p className={styles.specialization}>{profile.specialization}</p>
            </div>
          </div>
          <button
            className={styles.edit}
            onClick={() => setIsProfileFormOpen(true)}
          >
            <EditIcon /> {/* هذا يشير الآن إلى المكون React */}
          </button>
        </div>

      </Card>

      <Card marginTop={10}>
        <EditAboutPopup
          isOpen={isAboutFormOpen}
          onClose={() => setIsAboutFormOpen(false)}
        />
        <div className={styles.box2About}>
          <div className={styles.aboutEdit}>
            <p className={styles.about}>About</p>
            <button
              className={styles.edit}
              onClick={() => setIsAboutFormOpen(true)}
            >
              <EditIcon />
            </button>
          </div>
          <div className={styles.descriptionAbout}>
            <p>
              <span
                className={
                  isExpanded ? styles.expandedText : styles.collapsedText
                }
              >
                {about.text}
              </span>
              <button
                className={styles.seeMoreButton}
                onClick={handleToggleExpand}
              >
                {isExpanded ? "See Less" : "See More"}
              </button>
            </p>
          </div>
        </div>
      </Card>

      <Card marginTop={10}>
        <EducationForm
          isOpen={isEducationOpen}
          onClose={() => setIsEducationOpen(false)}
        />
        <div className={styles.box3}>
          <div className={styles.educationAddEdit}>
            <p>Education</p>
            <div className={styles.button}>
              <button
                className={styles.add}
                onClick={() => setIsEducationOpen(true)}
              >
                <PlusIcon />
              </button>
            </div>
          </div>
          {education.map((edu, index) => (
            <div key={index} className={styles.box3Part2}>
              <div className={styles.img}>
                <img
                  className={styles.universityIcon}
                  src={UniversityIcon}
                  alt="University"
                />
              </div>
              <div className={styles.educationDetails}>
                <div className={styles.titleOfEducation}>
                  <p className={styles.university}>{edu.university}</p>
                  <div className={styles.educationAction}>
                    <button
                      className={styles.edit}
                      onClick={() => setIsEducationOpen(true)}
                    >
                      <EditIcon />
                    </button>
                    <button  onClick={()=> ShowDelete("Are you sure u want to delete this Education")} >
                      <DeleteIcon  />
                    </button>
                  </div>
                </div>
                <p className={styles.date}>{edu.date}</p>
                <p className={styles.duration}>{edu.duration}</p>
                <p className={styles.college}>{edu.college}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card marginTop={10}>
        {/* <ProjectHistoryForm
          isOpen={isProjectHistoryOpen}
          onClose={() => setIsProjectHistoryOpen(false)}
        /> */}
        <div className={styles.box4}>

          <div className={styles.projectAddEdit}>
            <p>Projects History</p>
          </div>
          {projects.map((project, index) => (
            <div key={index} className={styles.postOfProject} >
              {index > 0 && <div className={styles.line}></div>} 
              <div className={styles.box4Part2}>
                <div className={styles.box4Part2Part1}>
                  <div className={styles.circle}></div>
                  <div className={styles.line1}></div>
                  <div className={styles.circle}></div>
                </div>
                <div className={styles.projectDetails}>
                  <p className={styles.projectName}>{project.name}</p>
                  <p className={styles.date}>{project.date}</p>
                  <p className={styles.duration}>{project.duration}</p>
                  <p className={styles.description}>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card marginTop={10}>
        <WorkExperienceForm
          isOpen={isWorkExperienceOpen}
          onClose={() => setIsWorkExperienceOpen(false)}
        />
        <div className={styles.box4}>
          <div className={styles.workAddEdit}>
            <p>Work Experience</p>
            <div className={styles.button}>
              <button className={styles.add}>
                <PlusIcon
                  onClick={() => setIsWorkExperienceOpen(true)}
                />
              </button>
            </div>
          </div>
          {workExperience.map((work, index) => (
            <div key={index} className={styles.workContainer}>
              {index > 0 && <div className={styles.line}></div>}
              <div className={styles.workDetails}>
              <div className={styles.titleWorkDetails}>
                  <p className={styles.workName}>{work.name}</p>
                  <div className={styles.workAction}>
                      <button  onClick={() => setIsWorkExperienceOpen(true)}>
                        <EditIcon />
                      </button>
                      <button  onClick={()=> ShowDelete("Are you sure u want to delete this Work kExperience")} >
                              <DeleteIcon />
                      </button>
                  </div>
              </div>
                <p className={styles.date}>{work.date}</p>
                <p className={styles.duration}>{work.duration}</p>
                <p className={styles.description}>{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* <Card marginTop={10}>
        <WorkForForm
          isOpen={isWorkForOpen}
          onClose={() => setIsWorkForOpen(false)}
        />
        <div className={styles.box4}>
          <div className={styles.workForAddEdit}>
            <p>Work For</p>
            <div className={styles.button}>
              <button
                className={styles.add}
                onclick={() => {
                  console.log(isWorkForOpen);

                  setIsWorkForOpen(true);
                }}
              >
                <PlusIcon
                  onClick={() => setIsWorkForOpen(true)}
                />
              </button>
              <button
                className={styles.edit}
                onClick={() => setIsWorkForOpen(true)}
              >
                <EditIcon />
              </button>
            </div>
          </div>

          {WorkFor?.map((workFor, index) => (
            <div key={index} className={styles.workForItem} >
              {index > 0 && <div className={styles.line}></div>}
              <div className={styles.box4Part2}>
              <div className={styles.box4Part2Part1}>
                  <div className={styles.circle}></div>
                  <div className={styles.line1}></div>
                  <div className={styles.circle}></div>
                </div>
                <div className={styles.workForDetails}>
                  <p className={styles.workForName}>{workFor.name}</p>
                  <p className={styles.date}>{workFor.date}</p>
                  <p className={styles.duration}>{workFor.duration}</p>
                  <p className={styles.description}>{workFor.description}</p>
                </div>
              </div>
            </div>
          ))}


        </div>
      </Card> */}
                  <DeleteComponent  isOpen={showDelete} message={messageDelete} onClose={ ()=> setshowDelete(false)}/>
    </div>
  );
}

export default ProfileLeft1;
