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
		title: "brand reveal",
		description: "A comprehensive look into Kutzpa's brand and launch materials",
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

			<div className="row">
				<div className="col">
				<div className="container py-3">
					<h2 className="pb-3">coming soon</h2>
				</div>

				<div className="container py-3">
					<div className="coming-soon-wrapper comingSoon1">
						<h4>company overview</h4>
						<p>Ventura is a travel app for everyone designed for authentic exploration</p>
					</div>
				</div>
				<div className="container py-3">
					<div className="coming-soon-wrapper comingSoon2">
						<h4>mini-series</h4>
						<p>Palate is a marketplace for food freelances to become financially free</p>
					</div>
				</div>
				<div className="container py-3">
					<div className="coming-soon-wrapper comingSoon3">
						<h4>tbd</h4>
						<p>Magic Lanturns - Description</p>
					</div>
				</div>
				</div>
			</div>
		</div>
	);
}

export default PortfolioList;
