import '../styling/Navbar.css'

function Navbar() {
  return (
    <>
    <nav className="menu" id="nav">
	<span className="nav-item active">
		<span className="icon">
			<i dataFeather="home"></i>
		</span>
		<a href="#">Home</a>
	</span>
	<span className="nav-item">
		<span className="icon">
			<i dataFeather="search"></i>
		</span>
		<a href="#">Search</a>
	</span>
	<span className="nav-item">
		<span className="icon">
			<span className="subicon">13</span>
			<i dataFeather="bell"></i>
		</span>
		<a href="#">Notifications</a>
	</span>
	<span className="nav-item">
		<span className="icon">
			<i dataFeather="star"></i>
		</span>
		<a href="#">Favorites</a>
	</span>
	<span className="nav-item">
		<span className="icon">
			<span className="subicon">1</span>
			<i dataFeather="bell"></i>
		</span>
		<a href="#">Your Profile</a>
	</span>
</nav>
    </>
  )
}

export default Navbar
