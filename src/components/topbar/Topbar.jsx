import './Topbar.css'

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarLeft">
        <span className="topIcon"><u>AMMAR</u></span>
      </div>
      <div className="topbarRight">
        <span className="topRightPage">HOME</span>
        <span className="topRightPage">ABOUT</span>
        <span className="topRightPage">STYLEGUIDE</span>
      </div>
    </div>
  )
}
