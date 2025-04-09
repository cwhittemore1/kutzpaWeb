import Video from "./Video";
import Star2Img from "../../../assets/images/v1/star2.png";
import AboutCounter from "./AboutCounter";

function About() {
	return (
		<div className="section">
			<div id="aximo-counter"></div>
			<div className="container">
			<div className="row aximo-section-video">
					<div className="col-lg-12">
						
						<Video />
					</div>
					{/* <div className="col-lg-4">
						<AboutCounter />
					</div> */}
				</div>
				<div className="aximo-section-title">
					<div className="row">
						{/* <div className="col-lg-6">
							<h2>
								<span className="aximo-title-animation">
									education first
								</span>{" "}
								by design
							</h2>
						</div> */}
						<div className="col-lg-6 offset-lg-3 d-flex align-items-center">
							<p>
								<h2>Education first, by design</h2>
								
								<br></br>
								<br></br>

								We work closely with our clients to know their objectives, target audience, unique
								needs, and practical design solutions.We work closely with our clients to know their objectives, target audience, unique
								needs, and practical design solutions.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
