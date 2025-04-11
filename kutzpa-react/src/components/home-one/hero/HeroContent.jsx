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
					<h1>
						<span className="aximo-title-animation">education first, <br></br> by design.</span>

						{/* <span className="aximo-title-animation">education</span>{' '}
						<span className="aximo-title-animation">first</span><br></br>{' '}
						<span className="aximo-title-animation">by design</span> */}
					</h1>
				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren>
					<p>
						{`Kutzpa is the only animation explainer studio led by globally award winning education and design experts. 
						 Every video we make is rooted in how people actually absorb and remember information. 
						`}
					</p>
				</FadeInStaggerTwoChildren>
				
				{/* <FadeInStaggerTwoChildren>
					<div className="aximo-hero-user-wrap">
						<div className="aximo-hero-user-thumb">
							<div className="aximo-hero-user-thumb-item">
								<img src={User1Img} alt="User1Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User3Img} alt="User3Img" />
							</div>
							<div className="aximo-hero-user-thumb-item">
								<img src={User2Img} alt="User2Img" />
							</div>
						</div>
						<div className="aximo-hero-user-data">
							<p>Believed by more than a thousand people</p>
						</div>
					</div>
				</FadeInStaggerTwoChildren> */}

				<FadeInStaggerTwoChildren>
					{/* <Link className="aximo-call-btn" to="/book-a-call">
						Book a consultation
					</Link> */}

					<FadeInUp className="aximo-btn-wrap">
						<Link className="aximo-default-btn pill corn-btn" to="/book-a-call">
							<span className="aximo-label-up">book a call</span>
							<span className="aximo-label-up">We can't wait to meet you!</span>
						</Link>
					</FadeInUp>

					{/* <Link className="aximo-call-btn outlined-btn" to="/book-a-call">
						Check out our portfolio
					</Link> */}
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>
	);
}

export default HeroContent;
