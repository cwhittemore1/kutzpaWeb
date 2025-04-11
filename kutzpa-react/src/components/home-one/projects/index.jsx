import Star2Img from "../../../assets/images/v1/star2.png";
import Project1Img from "../../../assets/images/v1/project1.png";
import Project2Img from "../../../assets/images/v1/project2.png";
import Project3Img from "../../../assets/images/v1/project3.png";
import Project4Img from "../../../assets/images/v1/project4.png";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";

const projectsData = [
	{
		id: crypto.randomUUID(),
		title: "Product Promo",
		subtitle: "Show off what you’ve built.",
		description: "Whether it’s a new feature for an existing product or something brand new to the world, marketing with a promo video makes it easy to get people excited and informed—fast.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Mini-Series",
		subtitle: "One topic. Many angles.",
		description: "Perfect for when one video isn’t enough. A mini series lets you dive deep with multiple short, focused episodes. Great for branding, onboarding, rollouts, and educational materials.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Founders Story",
		subtitle: "Every company starts somewhere.",
		description: "This is your origin story. What sparked the idea, what keeps you going, and what makes your team different? A founder’s story adds heart and human connection to your brand.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Abstract Concept",
		subtitle: "Intangible ideas.",
		description: "Not everything you need to communicate is tied to a product. Video can bring clarity to big ideas, like how something works, why it matters, or next steps.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Brand & Identity",
		subtitle: "Look and feel, in a nutshell.",
		description: "A brand overview video captures who you are and what you do. Perfect for your homepage, pitch decks, or social channels. It’s warm, clear, and memorable.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Custom",
		subtitle: "Need something a little different?",
		description: "We taken on projects of all shapes and sizes, and love those that don't fit easily in boxes. If you have a unique context or audience, we can help you make it make sense.",
		img: Project2Img,
	},
];

const swiperSettings = {
	spaceBetween: 0,
	direction: "horizontal",
	pagination: {
		clickable: true,
	},
	modules: [Pagination],
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		900: {
			slidesPerView: 2,
		},
		1600: {
			slidesPerView: 2.25,
		},
	},
};
function Projects() {
	return (
		<div className="section dark-bg aximo-section-padding">
			{/* <div className="container">
				<div className="aximo-section-title center light">
					<h2>
						<span className="aximo-title-animation">
							service types
						</span>
					</h2>
				</div>
			</div> */}
			<div className="swiper aximo-project-slider">
				<Swiper {...swiperSettings}>
					{projectsData.map((project) => (
						<SwiperSlide key={project.id}>
							<ProjectCard project={project} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Projects;
