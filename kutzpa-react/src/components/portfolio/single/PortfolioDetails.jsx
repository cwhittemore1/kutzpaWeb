import Single1Img from "../../../assets/images/portfolio/p_2.png";
import FadeInUp from "../../animation/FadeInUp";

function PortfolioDetails() {
	return (
		<div className="aximo-project-single-section">
			<div className="container justify-content-center">
				<FadeInUp className="aximo-project-single-thumb">
					<img src={Single1Img} alt="Single" />
				</FadeInUp>
				
				<div className="aximo-project-single-wrap">
					<div className="row justify-content-center">
						<div className="col-lg-5 pb-5 px-4">
							<h3>
								<span className="aximo-title-animation">
									brief
								</span>
							</h3>
							<p>
								The project began when a leading technology identified a market need for an
								innovative and energy-efficient smart home thermostat.
							</p>
						</div>
						<div className="col-lg-5 pb-5 px-4">
							<h3>
								<span className="aximo-title-animation">
									delivery
								</span>
							</h3>
							<p>
								The project began when a leading technology identified a market need for an
								innovative and energy-efficient smart home thermostat.
							</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
					<FadeInUp className="aximo-project-single-thumb">
						<img src={Single1Img} alt="Single" />
					</FadeInUp>
					</div>
					<div className="col-lg-6">
					<FadeInUp className="aximo-project-single-thumb">
						<img src={Single1Img} alt="Single" />
						</FadeInUp>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
					<FadeInUp className="aximo-project-single-thumb">
						<img src={Single1Img} alt="Single" />
						</FadeInUp>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
					<FadeInUp className="aximo-project-single-thumb">
						<img src={Single1Img} alt="Single" />
					</FadeInUp>
					</div>
					<div className="col-lg-6">
					<FadeInUp className="aximo-project-single-thumb">
						<img src={Single1Img} alt="Single" />
						</FadeInUp>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
