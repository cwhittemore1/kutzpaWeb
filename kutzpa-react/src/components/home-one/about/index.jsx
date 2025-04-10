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
						<div className="col-lg-10 d-flex align-items-center vstack">
							<div className="row col-lg-8 text-center pb-5">						
								<h2 className=" ">Education first,<br></br> by design</h2>
							</div>
							<div className="row col-lg-8 text-center px-2">								
								We work closely with our clients to know their objectives, target audience, unique
								needs, and practical design solutions.We work closely with our clients to know their objectives, target audience, unique
								needs, and practical design solutions.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
