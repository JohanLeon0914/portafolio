import Link from "next/link";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
		<header className="header">
      <Link href="/">
          <a><h3>Portafolio</h3></a>
        </Link>
			<nav ref={navRef}>
        <Link href="/">
          <a>Home</a>
        </Link>
				<Link href="/github">
          <a>Github</a>
        </Link>
        <Link href="/contacto">
          <a>Contáctame</a>
        </Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

{/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link href="/">
                <a className="navbar-brand" >Portafolio</a>
            </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <Link href='/contacto'>
            <a className="nav-link">Contáctame</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href='/github'>
            <a className="nav-link">Github</a>
        </Link>
      </li>
    </ul>
  </div>
        </div>
    </nav> */}

export default Navbar;
