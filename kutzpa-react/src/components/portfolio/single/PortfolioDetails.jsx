import Single1Img from "../../../assets/images/portfolio/p_2.png";
import Storyboard from "../../../assets/images/kutzpa/kutzpa-storyboard.png";
import Styleframe from "../../../assets/images/kutzpa/kutzpa-styleframes.png";
import artfulEducation from "../../../assets/images/kutzpa/1artfulEducation.png";
import weTurnNoise from "../../../assets/images/kutzpa/2weTurnNoise.png";
import intoKnowledge from "../../../assets/images/kutzpa/3intoKnowledge.png";
import highEndExplainer from "../../../assets/images/kutzpa/4highEndExplainer.png";
import kutzpa from "../../../assets/images/kutzpa/5kutzpa.png";
import flower from "../../../assets/images/kutzpa/6flower.png";
import play from "../../../assets/images/kutzpa/7play.png";
import makers from "../../../assets/images/kutzpa/8makers.png";
import spiral from "../../../assets/images/kutzpa/9spiral.png";
import FadeInUp from "../../animation/FadeInUp";
import { useRef } from 'react';
import { WistiaPlayer } from "@wistia/wistia-player-react";

function PortfolioDetails() {

	const myPlayer = useRef(null);

	return (
		<div className="aximo-project-single-section">
			<div className="container justify-content-center">
				<FadeInUp className="aximo-project-single-thumb">
					<WistiaPlayer ref={myPlayer} mediaId="fgzr67b32h" />
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
										This project is a brand reveal video and logo stinger created to 
										formally introduce Kutzpa’s visual identity to the world. 
									</p>
									<p>
										Designed for our own studio, the piece highlights the meaning and 
										derivation of the name “Kutzpa” (from “chutzpah”) while visually 
										expressing our core themes: audacity, curiosity, motion, clarity, 
										and creative playfulness. 
									</p>
									<p>
										We also highlighted key visual elements, including the Kutzpa 
										wiggle, brand color palette, typography, illustration, and motion 
										style. And finally, we showcase who we partner with and what we 
										stand for - the brave, the curious, and the ones ready to shake 
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
							<img src={Storyboard} alt="Storyboard" />
						</FadeInUp>
					</div>
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={Styleframe} alt="Styleframe" />
						</FadeInUp>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-12">
						<FadeInUp className="aximo-project-single-thumb">
							<WistiaPlayer ref={myPlayer} mediaId="b6fragbqv1" />
						</FadeInUp>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={artfulEducation} alt="Artful Education" />
						</FadeInUp>
					</div>
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={weTurnNoise} alt="We Turn Noise" />
						</FadeInUp>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={intoKnowledge} alt="Into Knowledge" />
						</FadeInUp>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={highEndExplainer} alt="High End Explainer Videos" />
						</FadeInUp>
					</div>
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={kutzpa} alt="Kutzpa" />
						</FadeInUp>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={flower} alt="Flower" />
						</FadeInUp>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={play} alt="Play" />
						</FadeInUp>
					</div>
					<div className="col-lg-6">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={makers} alt="We play with shimmy shakers rule breakers and all the makers in between" />
						</FadeInUp>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-12">
						<FadeInUp className="aximo-project-single-thumb">
							<img src={spiral} alt="Spiral End" />
						</FadeInUp>
					</div>
				</div>

			</div>
		</div>
	);
}

export default PortfolioDetails;
