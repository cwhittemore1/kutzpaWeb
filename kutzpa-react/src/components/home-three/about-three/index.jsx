import { Link } from "react-router-dom";
import Shape2Img from "../../../assets/images/v3/shape2.png";
import Thumb1Img from "../../../assets/images/v3/thumb1.png";
import FadeInLeft from "../../animation/FadeInLeft";
import FadeInUp from "../../animation/FadeInUp";
function About() {
	return (
		<div className="section aximo-section-padding2">
			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<FadeInLeft className="aximo-content-thumb">
							<img src={Thumb1Img} alt="Thumb1Img" />
							<div className="aximo-thumb-shape1">
								<img src={Shape2Img} alt="Shape2Img" />
							</div>
						</FadeInLeft>
					</div>
					<div className="col-lg-6 offset-lg-1">
						<div className="aximo-default-content">
							<h2>03.</h2>
							<h3>Consult & Strategy</h3>
							<p>
								We are a leading SEO company dedicated to helping brand grow their online presence &
								achieve higher search engine rankings and improve digital performance.
							</p>
							<p>
								Whether you re a small local business or a global brand, we tailor our SEO services to
								meet your unique needs & goals.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
