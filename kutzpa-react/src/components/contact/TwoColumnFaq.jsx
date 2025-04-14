import Star2Img from "../../assets/images/v1/star2.png";
import QuestionImg from "../../assets/images/icon/question.svg";
const faqData = {
	faq1: [
		{
			id: crypto.randomUUID(),
			title: "Why work with Kutzpa?",
			text: "Kutzpa is the only animated explainer studio led by globally award winning education and design experts. When you hire us, you work directly with us, no subcontractors, no middle-men. Just our full attention and expertise on every project!",
		},
		{
			id: crypto.randomUUID(),
			title: "What types of videos do we offer?",
			text: "Explainer videos, we help simplify complex ideas of all kinds into short form vidoes. Our work covers use cases across many formats and archetypes, such as product promos, mini-series, founders stories, abstract concepts, brand & identity, and all kinds of other custom out of the box scenarios.",
		},
		{
			id: crypto.randomUUID(),
			title: "How much does a video cost?",
			text: "The cost of our design services varies depending on the scope of the project. We provide customized quotes after discussing requirements.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "How long does it take?",
			text: "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization. While no two projects are the same, we do average about an 8-week turn around for 60s of footage.",
		},
		{
			id: crypto.randomUUID(),
			title: "How do feedback and revisions work?",
			text: "We value your feedback and collaborate closely to ensure you're happy with the final design. Our process includes three revision points—storyboarding, style frames, and production—each with 3–5 days for review and a feedback call. We keep moving forward, layering approvals so we never get stuck in revision loops.",
		},
		{
			id: crypto.randomUUID(),
			title: "Who owns the rights to the videos?",
			text: "You do! Clients retain the rights to the final video(s) in the requested format(s). Kutzpa retains rights to all editable or working files.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section aximo-section-padding">
			<div className="container">
				<div className="aximo-section-title start">
					<h3>
						<span className="aximo-title-animation pt-5">
							FAQs
						</span>
					</h3>
				</div>
				<div className="row">
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap responsive-margin">
							{faqData.faq1.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className="col-lg-6">
						<div className="aximo-accordion-normal-wrap">
							{faqData.faq2.map((faq) => (
								<div key={faq.id} className="aximo-accordion-normal-item">
									<div className="aximo-accordion-normal-icon">
										<img src={QuestionImg} alt="QuestionImg" />
									</div>
									<div className="aximo-accordion-normal-data">
										<h3>{faq.title}</h3>
										<p>{faq.text}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default TwoColumnFaq;
