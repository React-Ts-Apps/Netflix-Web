import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <img className="logo" src="/netflix-3.svg" alt="Netflix logo"></img>
      <img
        className="avatar"
        src="/netflix-avatar.png"
        alt="Netflix-avatar"
      ></img>
    </div>
  );
}
export default NavBar;
