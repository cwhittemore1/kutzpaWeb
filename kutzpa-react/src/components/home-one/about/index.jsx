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
							<h2 className="side-by-side-title">it's what the people want</h2>
						</div>
						<div className="col-lg-6 col-sm-12">								
							<p>Explainer videos break down complex topics in a few minutes or 
								less, making them perfect for company overviews, product promos, 
								and so much more. Explainer videos are the most popular form of 
								video marketing, with 98% of people having seen one and most 
								preferring video over text.
							</p>
							<p> 
								Kutzpa's the best partner for your video project because we're the 
								only animated explainer studio led by globally award winning 
								education and design experts. We're backed by 13 years of studying how 
								people think, learn, and remember. When you hire us, you work directly 
								with us, no subcontractors, no middle-men. Just our full attention 
								and expertise on every project! 
							</p>
						</div>
				</div>
				</div>
			</div>
		</div>
	);
}

export default About;
