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
						<div className="col-lg-12 px-4">

							<h3 className="pb-3">
								<span className="aximo-title-animation">
									the brief
								</span>
							</h3>
							
							<div className="row">
								<div className="col-lg-6 col-md-12 pb-5">							
									<p>
										We’re officially unveiling Kutzpa’s visual brand identity 
										to the world — loud, proud, and unapologetically bold. 
									</p>
									<p>
										The project centers on a short, high-impact brand reveal video 
										and a sharp logo stinger. At its core, the work unpacks the 
										meaning and derivation of “Kutzpa”, a bold reinterpretation 
										of chutzpah, and brings the brand’s core themes to life: 
										boldness, curiosity, motion, clarity, and creative fire. 
									</p>
									<p>
										We also highlighted key visual elements, including the signature 
										Kutzpa Wiggle™, a vibrant color palette, expressive typography, 
										raw illustration work, and a distinctive motion style. And 
										finally, we made it unmistakably clear who Kutzpa stands 
										with — the brave, the curious, and the ones ready to shake 
										things up.
									</p>
								</div>

								<div className="col-lg-5 offset-lg-1 col-md-12">
									<div className="row">
										<div className="col-md-6 col-sm-12 pb-4">
										<p>
											<b>Client</b><br></br>
											Kutzpa
										</p>
										</div>
										<div className="col-md-6 col-sm-12 pb-4">
											<p>
												<b>Use Case</b><br></br>
												Brand Reveal
											</p>
										</div>
									</div>

									<div className="row">
										<div className="col-md-6 col-sm-12 pb-4">
											<p>
												<b>Tone & Feel</b><br></br>
												Confident, creative, slightly chaotic. Feels smart and beautiful
											</p>
										</div>
										<div className="col-md-6 col-sm-12 pb-4">
											<p>
												<b>Audience</b><br></br>
												Creative professionals, brand teams, potential clients, and fans. 
											</p>
										</div>
									</div>
								</div>

							</div>
						


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
