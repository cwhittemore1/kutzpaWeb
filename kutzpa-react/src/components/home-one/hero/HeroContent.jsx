import { Link } from "react-router-dom";
import ShapeImg from "../../../assets/images/v1/shape1.png";
import StarImg from "../../../assets/images/v1/star.png";
import User1Img from "../../../assets/images/v1/user1.png";
import User2Img from "../../../assets/images/v1/user2.png";
import User3Img from "../../../assets/images/v1/user3.png";
import FadeInUp from "../../animation/FadeInUp";

import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../animation/FadeInStaggerTwo";
function HeroContent() {
	return (
		<div className="aximo-hero-content">
			<FadeInStaggerTwo>
				<FadeInStaggerTwoChildren>
					<div className="hero-padding">
						<h1>
							<span className="aximo-title-animation">explainer</span>
						</h1>
						<h1>
							<span className="aximo-title-animation hero-subtitle-2">videos</span>
						</h1>
					</div>
				</FadeInStaggerTwoChildren>

				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12">
					<FadeInStaggerTwoChildren>
					<p className="subtitle-text">
						{/* {`Kutzpa is the only animation explainer studio led by globally award winning education and design experts. 
						 Every video we make is rooted in how people actually absorb and remember information. 
						`} */}
						{`Kutzpa – The only animated explainer studio led by globally award winning education and design experts.
						`}
					</p>
				</FadeInStaggerTwoChildren>
					</div>

					<div className="col-lg-6 col-md-12">
					<FadeInStaggerTwoChildren>
						<FadeInUp className="hero-button d-flex justify-content-end">
							<Link className="aximo-default-btn pill corn-btn" to="/book-a-call">
								<span>book a call</span>
								<i className="far fa-arrow-alt-circle-right"></i>
							</Link>
						</FadeInUp>

						{/* <Link className="aximo-call-btn outlined-btn" to="/book-a-call">
							Check out our portfolio
						</Link> */}
						</FadeInStaggerTwoChildren>
					</div>
				</div>


			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
