import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../../components/animation/FadeInStaggerTwo";

function TwoColumnFaq() {
	return (
		<div className="container">
			<FadeInStaggerTwo className="row">
				<FadeInStaggerTwoChildren className="col-lg-6">
					<div className="accordion aximo-accordion-wrap2" id="aximo-accordion-col1">

						<div className="accordion-item ">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseOne"
								>
												Why work with Kutzpa?
								</button>
							</h2>
							<div
								id="collapseOne"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col1"
							>
								<div className="accordion-body">
								Kutzpa is the only animated explainer studio led by globally award 
								winning education and design experts. When you hire us, you work 
								directly with us, no subcontractors, no middle-men. Just our full 
								attention and expertise on every project!
								</div>
							</div>
						</div>

						<div className="accordion-item ">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseTwo"
								>
									What’s involved in getting started?
								</button>
							</h2>
							<div
								id="collapseTwo"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col1"
							>
								<div className="accordion-body">
									The easiest way to get started is to simply get in touch 
									and let us know what you’re looking for. If it feels like 
									a good fit, we’ll provide a formal proposal to show just 
									what we can do for you. Once the proposal is approved, 
									we’ll send along a Video Services Agreement with an 
									initial invoice for 50% of the project total. We’ll also 
									provide a creative brief for you to complete and then 
									schedule our kick-off call.
								</div>
							</div>
						</div>

						<div className="accordion-item ">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseThree"
								>
									What types of videos do you offer?
								</button>
							</h2>
							<div
								id="collapseThree"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col1"
							>
								<div className="accordion-body">
									We specialize in 2D animated explainer videos, which are 
									short engaging videos that break down complex topics in a 
									few minutes or less. Explainer videos are great for company
									overviews, product promos, mini-series, founders stories, 
									abstract concepts, and other custom ideas.
								</div>
							</div>
						</div>

						<div className="accordion-item ">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFour"
								>
									How much does a video cost?
								</button>
							</h2>
							<div
								id="collapseFour"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col1"
							>
								<div className="accordion-body">
									Cost depends on a variety of factors including video length, 
									style, and complexity. To give you a general idea, a single, 
									custom 2D animated video typically runs between $22,000 - $29,000. 
									Looking to produce a series of videos? Love it! We’re always 
									ready to discuss package pricing to consolidate costs.
								</div>
							</div>
						</div>
					</div>

				</FadeInStaggerTwoChildren>
				<FadeInStaggerTwoChildren className="col-lg-6">
					<div className="accordion aximo-accordion-wrap2" id="aximo-accordion-col2">
						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseFive"
								>
									How long should my video be?
								</button>
							</h2>
							<div
								id="collapseFive"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col2"
							>
								<div className="accordion-body">
									Audience attention spans aren’t getting any longer. For that reason, 
									we try to keep our videos as succinct as possible—usually 30 to 120 
									seconds—while still conveying all the necessary information. Making 
									omething digestible means we can’t always cover every single 
									marketing bullet point. And that’s okay. The videos we make are often 
									meant to give viewers just enough information to entice and get them 
									interested in taking the next step.
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseSix"
								>
									How long does it take to make?
								</button>
							</h2>
							<div
								id="collapseSix"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col2"
							>
								<div className="accordion-body">
									Our design process typically involves discovery, concept development, 
									design, revisions based on feedback, and finalization. While no two 
									projects are the same, we do average about an 8-week turn around 
									for 60s of animation.
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseSeven"
								>
									How do revisions and feedback work?
								</button>
							</h2>
							<div
								id="collapseSeven"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col2"
							>
								<div className="accordion-body">
									We value your feedback and collaborate closely to ensure you're 
									happy with the final design. Our process includes three revision 
									points—storyboarding, style frames, and production—each with 3–5 
									days for review and a feedback call. We keep moving forward, 
									layering approvals so we never get stuck in revision loops.
								</div>
							</div>
						</div>

						<div className="accordion-item">
							<h2 className="accordion-header">
								<button
									className="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#collapseEight"
								>
									Who owns the rights to the videos?
								</button>
							</h2>
							<div
								id="collapseEight"
								className="accordion-collapse collapse"
								data-bs-parent="#aximo-accordion-col2"
							>
								<div className="accordion-body">
									You do! Clients retain the rights to the final video(s) in the requested format(s). 
									Kutzpa retains rights to all editable or working files.The full copyright details 
									are outlined in our Video Services Agreement.
								</div>
							</div>
						</div>
					</div>
				</FadeInStaggerTwoChildren>
			</FadeInStaggerTwo>
		</div>

	);
}

export default TwoColumnFaq;
