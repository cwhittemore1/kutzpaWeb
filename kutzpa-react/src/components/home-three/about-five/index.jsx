import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb5Img from "../../../assets/images/v3/thumb5.png";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
import CheckImg from "../../../assets/images/v3/check.svg";

function AboutFive() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb process-thumb-border">
							<img src={Thumb5Img} alt="Thumb5Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content">
							<h2>05.</h2>
							<h3>Delivery & Handoff</h3>
							<p>
								After revision changes are made, your video is ready to roll. We’ll export it in the format you need and package it up for a smooth handoff. If your project includes multiple versions (like social clips or alternate aspect ratios), we’ll take care of that too.
								Need tips on how to launch it? We’ll share implementation insights to help you make the most of your NEW video.
							</p>
							<div className="aximo-list-icon">
								<ul>
									<li>
										<img src={CheckImg} alt="CheckImg" /> Pending reception of final payment
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

export default AboutFive;
