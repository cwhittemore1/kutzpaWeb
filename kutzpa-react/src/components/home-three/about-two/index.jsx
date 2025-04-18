import CheckImg from "../../../assets/images/v3/check.svg";
import Thumb2Img from "../../../assets/images/v3/thumb2.png";
import FadeInLeft from "../../animation/FadeInLeft";
function AboutThree() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb2Img} alt="Thumb2Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1 px-4">
						<div className="aximo-default-content">
							<h2>02.</h2>
							<h3>Story & Storyboard</h3>
							<p>
							Every great video starts with a solid story. We craft a message that’s clear, 
								engaging, and built to stick. A storyboard is a mid-fidelity grayscale 
								map for the visuals, pacing, and key moments. Together, this is our first moment 
								for revision and feedback before we dive into full style and art direction
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
