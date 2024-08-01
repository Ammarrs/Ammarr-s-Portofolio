import './projects.css'

export default function Projects() {
  return (
    <div className="projectContainer">
      <div className="project">
        <img src="/assets/project1.png" alt="" className="projectImg" />
        <div className="projectInfo">
          <span className="projectTitle">Project 1</span>
          <span className="projectCategory">Web Design</span>
        </div>
      </div>
      <div className="project">
        <img src="/assets/QAMAR AMR.jpg" alt="" className="projectImg" />
        <div className="projectInfo">
          <span className="projectTitle">Project 3</span>
          <span className="projectCategory">Graphic Design</span>
        </div>
      </div>
    </div>
  )
}
