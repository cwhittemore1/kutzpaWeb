import Shape1Img from "../../../assets/images/v1/shape1.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import { Link } from "react-router-dom";

function FooterContent() {
	return (
		<div className="aximo-default-content light position-relative">
			<div className="row">
				
				<div className="col aximo-social-icon pb-5">
					<h4 className="pb-3">Sitemap</h4>
					<ul>
						<li>
							<Link to="/">home</Link>
						</li>
						<li>
							<Link to="/portfolio-one">portfolio</Link>
						</li>
						<li>
							<Link to="/process">process</Link>
						</li>
						<li>
							<Link to="/book-a-call">book a call</Link>
						</li>
					</ul>	
				</div>	

				
			<div className="col aximo-social-icon pb-5">
				<h4 className="pb-3">Social</h4>
				<ul>
					<li>
						<a href="https://www.youtube.com/@kutzpa" target="_blank">
							Youtube
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/kutzpa.llc" target="_blank">
							Instagram
						</a>
					</li>
					{/* <li>
						<a href="https://www.instagram.com/kutzpa.llc" target="_blank">
							Dribbble
						</a>
					</li> */}
					{/* <li>
						<a href="https://www.instagram.com/kutzpa.llc" target="_blank">
							Behance
						</a>
					</li> */}
					<li>
						<a href="https://www.linkedin.com/company/104485116/admin/dashboard/" target="_blank">
							LinkedIn
						</a>
					</li>
				</ul>
				
			</div>	
			</div>	

			{/* <div className="aximo-info-wrap">
				<div className="aximo-info">
					<ul>
						<li>
							<a href="mailto:admin@mlutzpa.com">Reach out via social media or send us a message using the form here!</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="aximo-social-icon social-large">
				<ul>
					<li>
						<a href="https://www.youtube.com/@kutzpa" target="_blank">
							<i className="fab fa-youtube"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/kutzpa.llc" target="_blank">
							<i className="icon-instagram"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/kutzpa.llc" target="_blank">
							<i className="fab fa-dribbble"></i>
						</a>
					</li>
					<li>
						<a href="https://www.instagram.com/kutzpa.llc" target="_blank">
							<i className="fab fa-behance"></i>
						</a>
					</li>
					<li>
						<a href="https://www.linkedin.com/company/104485116/admin/dashboard/" target="_blank">
							<i className="icon-linkedin"></i>
						</a>
					</li>
				</ul>
			</div> */}

		</div>
	);
}

export default FooterContent;
