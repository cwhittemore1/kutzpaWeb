import Single1Img from "../../../assets/images/portfolio/p_single.png";
import Single2Img from "../../../assets/images/portfolio/p_single2.png";
import Star2Img from "../../../assets/images/v1/star2.png";
import FadeInRight from "../../animation/FadeInRight";
import FadeInUp from "../../animation/FadeInUp";
const projectResolveSteps = [
	{
		id: crypto.randomUUID(),
		title: "Concept Development",
		text: "Based on the market research findings, the design team began developing conceptual designs for the smart thermostat. They brainstormed ideas, created mood boards, and explored various design directions.",
	},
	{
		id: crypto.randomUUID(),
		title: "Manufacturing and Production",
		text: "Once the design was finalized, the project transitioned to the manufacturing phase. Materials, suppliers, and production processes were carefully selected to ensure quality and cost-effectiveness.",
	},
	{
		id: crypto.randomUUID(),
		title: "Success and Impact",
		text: "The smart home thermostat quickly gained popularity and was well-received in the market. The project was a success, benefiting both the company and the environment.",
	},
];
function PortfolioDetails() {
	return (
		<div className="aximo-project-single-section">
			<div className="container justify-content-center">
				<FadeInUp className="aximo-project-single-thumb">
					<img src={Single1Img} alt="Single" />
				</FadeInUp>
				<div className="aximo-project-info-wrap">
					<div className="aximo-project-info">
						<h4>Kutzpa</h4>
						<p>client</p>
					</div>
					<div className="aximo-project-info">
						<h4>2025</h4>
						<p>date</p>
					</div>
					<div className="aximo-project-info">
						<h4>8 months</h4>
						<p>duration</p>
					</div>
				</div>
				<div className="aximo-project-single-wrap">
					<div className="row justify-content-center">
						<div className="col-lg-5">
							<h3>
								How we initiate and
								<span className="aximo-title-animation">
									resolve the project
								</span>
							</h3>
							<p>
								The project began when a leading technology identified a market need for an
								innovative and energy-efficient smart home thermostat.
							</p>
						</div>
						<div className="col-lg-5">
							<div className="aximo-default-content m-right-gap">
								<h3>
									How we initiate and
									<span className="aximo-title-animation">
										resolve the project
									</span>
								</h3>
								<p>
									The project began when a leading technology identified a market need for an
									innovative and energy-efficient smart home thermostat.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioDetails;
