import '../../css/component/SideBar.css'

export default function SideBarStartLearning() {
  return (
    <div className="container">
      <nav className="side-nav">
        <ul className="nav-menu">
          <li className="nav-item">
            <a href="#">
              <i className="fas fa-tachometer-alt"></i>
              <span className="menu-text">DBMS Tutorial</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fas fa-user"></i>
              <span className="menu-text">Users</span>
            </a>
          </li>
          <li className="nav-item active">
            <a href="#">
              <i className="fas fa-file-alt"></i>
              <span className="menu-text">Posts</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fas fa-play "></i>
              <span className="menu-text">Media</span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#">
              <i className="fas fa-sign-out-alt"></i>
              <span className="menu-text">exit</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
