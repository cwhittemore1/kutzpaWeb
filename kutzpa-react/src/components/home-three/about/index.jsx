import { Link } from "react-router-dom";
import CheckImg from "../../../assets/images/v3/check.svg";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb1Img from "../../../assets/images/v3/thumb1.png";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
function About() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb1Img} alt="Thumb1Img" />
							<div className="aximo-thumb-shape1">
								{/* <img src={Shape2Img} alt="Shape2Img" /> */}
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content">
							<h2>01.</h2>
							<h3>Consult & Strategy</h3>
							<p>
								We kick things off with a deep-dive remote consultation, getting to know your goals, wishlist, and big-picture vision. What message needs to land? Who’s watching? What’s gonna make this video unforgettable?
							</p>
							<p>
								We’ll dig into your audience, analyze competitors, ideate, and explore the best way to make your message click. After contract signing, we gather your brand assets and start laying the groundwork for a video that’s uniquely YOU.
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
