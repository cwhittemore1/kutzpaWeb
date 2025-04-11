import CheckImg from "../../../assets/images/v3/check.svg";
import Shape1Img from "../../../assets/images/v3/shape1.png";
import Thumb2Img from "../../../assets/images/v3/thumb2.png";
import FadeInRight from "../../animation/FadeInRight";
function AboutFour() {
	return (
		<div className="section aximo-section-padding6 overflow-hidden">
			<div className="container">
				<div className="row">
					<div className="col-lg-5 order-lg-1 offset-lg-1">
						<FadeInRight className="aximo-content-thumb ">
							<img src={Thumb2Img} alt="Thumb2Img" />
							<div className="aximo-thumb-shape2">
								<img src={Shape1Img} alt="Shape1Img" />
							</div>
						</FadeInRight>
					</div>
					<div className="col-lg-6">
						<div className="aximo-default-content">
						<h2>04.</h2>
						<h3>Production</h3>
							<p>
								Now, the real fun begins. We animate, refine, and polish your video, bringing your message and vision to life. Every woosh, swirl, and pop is carefully crafted to feel just right.
								We’ll sync the video up with music, narration (if applicable) and sound design, ensuring the video hits both visually and audibly. You’ll get a revision round here too - because we want this to be just right!							</p>
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
