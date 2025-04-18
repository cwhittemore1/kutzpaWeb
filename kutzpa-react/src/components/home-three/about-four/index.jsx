import CheckImg from "../../../assets/images/v3/check.svg";
import Shape1Img from "../../../assets/images/v3/shape1.png";
import Thumb4Img from "../../../assets/images/v3/production.gif";
import FadeInLeft from "../../animation/FadeInLeft";
function AboutFour() {
	return (
		<div className="section aximo-section-padding6">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb4Img} alt="Thumb4Img" />
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1 px-4">
						<div className="aximo-default-content">
							<h2>04.</h2>
							<h3>Production</h3>
							<p>
								Now, the real fun begins. We animate, refine, and polish your video, 
								bringing your message and vision to life. Every woosh, swirl, and 
								pop is carefully crafted to feel just right. We’ll sync the video up 
								with music, narration (if applicable) and sound design, ensuring the 
								video hits both visually and audibly. You’ll get a final revision round here 
								too - because we want this to be just right!
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

export default AboutFour;
