import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb5Img from "../../../assets/images/v3/thumb5.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
import CheckImg from "../../../assets/images/v3/check.svg";

function AboutFive() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 order-lg-1 offset-lg-1">
						<FadeInRight className="aximo-content-thumb process-thumb-border">
							<img src={Thumb5Img} alt="Thumb5Img" />
						</FadeInRight>
					</div>
					<div className="col-lg-6 px-4">
						<div className="aximo-default-content">
						<h2>05.</h2>
						<h3>Delivery & Handoff</h3>
							<p>
								After revision changes are made, your video is ready to roll. 
								We’ll export it in the format you need and package it up for a 
								smooth handoff. If your project includes multiple versions, 
								like social clips or alternate aspect ratios, we’ll take care 
								of that too. Need tips on how to launch it? We’ll share 
								implementation guidance to help you make the most of your NEW video.						
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

export default AboutFive;
