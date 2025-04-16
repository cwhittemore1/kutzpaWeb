import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb3Img from "../../../assets/images/v3/thumb3.png";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
import CheckImg from "../../../assets/images/v3/check.svg";
function About() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb3Img} alt="Thumb3Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1 px-4">
						<div className="aximo-default-content">
							<h2>03.</h2>
							<h3>Style & Art Direction</h3>
							<p>
								Time to add personality. We explore color palettes, animation styles, 
								visual effects, and audio that fit your brand. We stitch it all together 
								in an animatic (a rough animated version.) so you can envision exactly 
								how the final video will shape up. This is a second moment for revision 
								and feedback before we begin final production.
							</p>
							<div className="aximo-list-icon">
								<ul>
									<li>
										<img src={CheckImg} alt="CheckImg" /> ~2 Weeks
									</li>
									<li>
										<img src={CheckImg} alt="CheckImg" /> Revision Included
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
