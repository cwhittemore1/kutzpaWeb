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
			title: "What’s involved in getting started?",
			text: "The easiest way to get started is to simply get in touch and let us know what you’re looking for. If it feels like a good fit, we’ll provide a formal proposal to show just what we can do for you. Once the proposal is approved, we’ll send along a Video Services Agreement with an initial invoice for 50% of the project total. We’ll also provide a creative brief for you to complete and then schedule our kick-off call.",
		},
		{
			id: crypto.randomUUID(),
			title: "What types of videos do you offer?",
			text: "We specialize in 2D animated explainer videos, which are short engaging videos that break down complex topics in a few minutes or less. Explainer videos are great for company overviews, product promos, mini-series, founders stories, abstract concepts, and other custom ideas.",
		},
		{
			id: crypto.randomUUID(),
			title: "How much does a video cost?",
			text: "Cost depends on a variety of factors including video length, style, and complexity. To give you a general idea, a single, custom 2D animated video typically runs between $22,000 - $29,000. Looking to produce a series of videos? Love it! We’re always ready to discuss package pricing to consolidate costs.",
		},
	],
	faq2: [
		{
			id: crypto.randomUUID(),
			title: "How long should my video be?",
			text: "Audience attention spans aren’t getting any longer. For that reason, we try to keep our videos as succinct as possible—usually 30 to 120 seconds—while still conveying all the necessary information. Making something digestible means we can’t always cover every single marketing bullet point. And that’s okay. The videos we make are often meant to give viewers just enough information to entice and get them interested in taking the next step.",
		},
		{
			id: crypto.randomUUID(),
			title: "How long does it take to make?",
			text: "Our design process typically involves discovery, concept development, design, revisions based on feedback, and finalization. While no two projects are the same, we do average about an 8-week turn around for 60s of animation.",
		},
		{
			id: crypto.randomUUID(),
			title: "How do revisions and feedback work?",
			text: "We value your feedback and collaborate closely to ensure you're happy with the final design. Our process includes three revision points—storyboarding, style frames, and production—each with 3–5 days for review and a feedback call. We keep moving forward, layering approvals so we never get stuck in revision loops.",
		},
		{
			id: crypto.randomUUID(),
			title: "Who owns the rights to the videos?",
			text: "You do! Clients retain the rights to the final video(s) in the requested format(s). Kutzpa retains rights to all editable or working files.The full copyright details are outlined in our Video Services Agreement.",
		},
	],
};
function TwoColumnFaq() {
	return (
		<div className="section pb-7">
			<div className="container">
				{/* <div className="aximo-section-title start">
					<h3>
						<span className="aximo-title-animation pt-5">
							FAQs
						</span>
					</h3>
				</div> */}
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
