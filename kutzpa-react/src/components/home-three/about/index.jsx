import { Link } from "react-router-dom";
import CheckImg from "../../../assets/images/v3/check.svg";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb1Img from "../../../assets/images/v3/thumb1.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
function About() {
	return (
		<div className="section aximo-section-padding6 pt-5">
			<div className="container">

				<div className="row">
					<div className="col-lg-5 order-lg-1 offset-lg-1">
						<FadeInRight className="aximo-content-thumb ">
							<img src={Thumb1Img} alt="Thumb1Img" />
						</FadeInRight>
					</div>
					<div className="col-lg-6 px-4">
						<div className="aximo-default-content">
							<h2>01.</h2>
							<h3>Consult & Strategy</h3>
							<p>
								After contract signing, we kick things off with a deep-dive remote consultation. 
								During this time we unpack your goals, wishlist, big-picture vision, take note of 
								competitors, and gather your brand assets to start laying the groundwork for a 
								video that’s uniquely YOU.
							</p>
							<div className="aximo-list-icon">
								<ul>
									<li>
										<img src={CheckImg} alt="CheckImg" /> Pets Encouraged!
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
