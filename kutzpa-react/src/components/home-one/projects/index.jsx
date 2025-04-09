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
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Mini-Series",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
		img: Project2Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Founders Story",
		description: "Designing the UI/UXe for mobile apps and web applications to ensure usability & engagement.",
		img: Project3Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Abstract Concept",
		description: "Creating packaging solutions for products that not only protect attract customers on store.",
		img: Project4Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Brand & Identity",
		description: "Developing the look and feel of physical products, aesthetics, and functionality.",
		img: Project1Img,
	},
	{
		id: crypto.randomUUID(),
		title: "Custom",
		description: "Creating or refreshing a company's logo and developing a cohesive visual identity.",
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
