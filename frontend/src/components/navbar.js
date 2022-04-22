import "./navbar.css"

function Navbar(){
  return(
    <nav className="navbar">
      <form class="container-fluid">
        <span className="navbar-brand"></span>
        <div className="buttons-mv">
          <button className="nav-buttons"> Home </button>
          <button className="nav-buttons"> About me </button>
          <button className="nav-buttons"> Portfolio </button>
        </div>
      </form>
    </nav>
  );
}
export default Navbar;
