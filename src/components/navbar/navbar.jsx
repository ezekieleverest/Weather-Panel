import weatherpanellogo from './weatherpanellogo.png'
import './navbar.css';

function Navbar() {
  return (
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
 
  <a class="navbar-brand" href="#">
      <img src={weatherpanellogo} />
  </a>


  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
  <form class="form-inline" action="/action_page.php">
    <input class="form-control mr-2" type="text" placeholder="Search for a City" />
    <button class="btn btn-success" type="submit">Search</button>
  </form>
  </div>
</nav>
  );
}
export default Navbar
