import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb1Img from "../../../assets/images/v3/thumb1.png";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
import CheckImg from "../../../assets/images/v3/check.svg";
function About() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb1Img} alt="Thumb1Img" />
							<div className="aximo-thumb-shape1">
								<img src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content">
							<h2>03.</h2>
							<h3>Style & Art Direction</h3>
							<p>
								Time to add personality. We explore color palettes, animation styles, and visual effects that fit your brand. We lock in the look and feel with style frames (fully designed snapshots of key scenes), and we start curating music options to enhance the full experience.
								We’ll stitch it all together in an animatic (a rough animated version) so you can envision exactly how the final video will shape up.
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
