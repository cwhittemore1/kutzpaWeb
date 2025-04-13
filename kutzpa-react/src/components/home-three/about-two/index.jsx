import CheckImg from "../../../assets/images/v3/check.svg";
import Thumb2Img from "../../../assets/images/v3/thumb2.png";
import FadeInRight from "../../animation/FadeInRight";
function AboutThree() {
	return (
		<div className="section aximo-section-padding6 overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-1 offset-lg-1">
						<FadeInRight className="aximo-content-thumb ">
							<img src={Thumb2Img} alt="Thumb2Img" />
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="aximo-default-content">
						<h2>02.</h2>
						<h3>Story & Storyboard</h3>
							<p>
								Every great video starts with a solid story. We craft a message that’s clear, engaging, and built to stick. Then, we sketch out a mid-fidelity grayscale storyboard to map out the visuals, pacing, and key moments. Think of a storyboard like a blueprint for your video. You’ll see the structure before we dive into full design, and we’ll refine it together to make sure every scene pulls its weight.
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

export default AboutThree;
