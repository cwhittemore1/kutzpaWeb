import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section">
			<div className="container">
			<div className="row aximo-section-video">
					<div className="col-lg-12">
						<Video />
					</div>
				</div>
				<div className="px-4">
					<div className="row justify-content-center">
						<div className="col-lg-6 col-sm-12 pb-4">						
							<h2 className="fw-500">the brain focuses on motion</h2>
						</div>
						<div className="col-lg-6 col-sm-12">								
							<p>Explainer videos are the most popular form of video marketing, with 98% 
								of people having seen one and most preferring video over text.
							</p>
							<p>Kutzpa is backed by 13 years of studying how people think, learn, and 
								remember. When you hire us, you work directly with us, no subcontractors, 
								no middle-men. Just our full attention and expertise on every project! 
							</p>
						</div>
				</div>
				</div>
			</div>
		</div>
	);
}

export default About;
