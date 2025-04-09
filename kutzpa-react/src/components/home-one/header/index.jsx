/* eslint-disable for-direction */
import DesktopNav from "../../common/navigation/desktop-nav/DesktopNav";
import Dropdown from "../../common/navigation/desktop-nav/Dropdown";
import DropdownItem from "../../common/navigation/desktop-nav/DropdownItem";
import NavItem from "../../common/navigation/desktop-nav/NavItem";
import { menuItemsData } from "../../common/navigation/mobile-nav/menuItemsData";
import MobileNavbar from "../../common/navigation/mobile-nav/MobileNavbar";
import HeaderButton from "./HeaderButton";
import HeaderLogo from "./HeaderLogo";

function Header() {
	return (
		<header className="site-header aximo-header-section aximo-header1 dark-bg" id="sticky-menu">
			<div className="container">
				<nav className="navbar site-navbar">
					<HeaderLogo />
					<div className="menu-block-wrapper">
						<DesktopNav>

							{/* <NavItem dropdown title="Portfolio">
								<Dropdown>
									<DropdownItem url="/">Design Agency</DropdownItem>
									<DropdownItem url="home-two">Startup Agency</DropdownItem>
									<DropdownItem url="home-three">SEO Agency</DropdownItem>
									<DropdownItem url="home-four">Business Consultation</DropdownItem>
									<DropdownItem url="home-five">Digital Marketing</DropdownItem>
									<DropdownItem url="home-six">Interior Design Agency</DropdownItem>
									<DropdownItem url="home-seven">Advertising agency</DropdownItem>
								</Dropdown>
							</NavItem> */}

							<NavItem url="portfolio-one">portfolio</NavItem>
							<NavItem url="home-three">process</NavItem>
							<NavItem url="contact-us">contact us</NavItem>
						</DesktopNav>
					</div>
					{/* <HeaderButton /> */}

					<MobileNavbar menuItemsData={menuItemsData} title="Aximo" />
				</nav>
			</div>
		</header>
	);
}

export default Header;
