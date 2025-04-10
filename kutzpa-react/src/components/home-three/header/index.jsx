import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header3 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>
							<NavItem url="about-us">portfolio</NavItem>
							<NavItem url="about-us">process</NavItem>
							<NavItem url="book-a-call">book a call</NavItem>
						</DesktopNav>
					</div>
				</nav>
			</div>
		</header>
	);
}

export default Header;
