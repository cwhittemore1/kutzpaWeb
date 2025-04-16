import Portfolio1Img from "../../../assets/images/portfolio/p_1.png";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import FadeInStagger from "../../animation/FadeInStagger";
import PortfolioCard from "./PortfolioCard";

const portfolioListData = [
	// {
	// 	id: crypto.randomUUID(),
	// 	title: "Ventura",
	// 	description: "Developing the look and feel of physical products, aesthetics, and functionality.",
	// 	img: Portfolio1Img,
	// },
	{
		id: crypto.randomUUID(),
		title: "Kutzpa",
		description: "A dynamic reveal of Kutzpa’s brand identity, its roots, look, and personality, crafted to formally debut the visual system to the world.",
		img: Portfolio2Img,
	},
];

function PortfolioList() {
	return (
		<div className="aximo-project-one-column">

			<div className="container justify-content-end">
				{portfolioListData.map((portfolio, index) => (
					<FadeInStagger className="aximo-project-wrap3" key={portfolio.id} index={index}>
						<PortfolioCard portfolio={portfolio} />
					</FadeInStagger>
				))}
			</div>

			<div className="row px-4">
					<div className="container">
						<h3 className="pb-3 px-4">coming soon</h3>
					</div>

				<div className="container"> 
					<div className="row">
						<div className="col-lg-4 mb-2">
							<div className="coming-soon-wrapper comingSoon1">
								<p className="mb-0"><b>Ventura</b></p>
								<p>Ventura is a travel app for everyone designed for authentic exploration.</p>
							</div>
						</div>
						<div className="col-lg-4 mb-2">
							<div className="coming-soon-wrapper comingSoon2">
								<p className="mb-0"><b>Palate</b></p>
								<p>Palate is a marketplace for food freelancers to build their own financial freedom.</p>
							</div>
						</div>
						<div className="col-lg-4 mb-2">
							<div className="coming-soon-wrapper comingSoon3">
								<p className="mb-0"><b>Magic Lanterns</b></p>
								<p>Magic Lanterns is the story of film and animation across time, split into mini chapters.</p>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default PortfolioList;
