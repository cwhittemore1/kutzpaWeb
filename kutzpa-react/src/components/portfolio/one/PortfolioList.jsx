import Portfolio1Img from "../../../assets/images/portfolio/p_1.png";
import Portfolio2Img from "../../../assets/images/portfolio/p_2.png";
import Portfolio3Img from "../../../assets/images/portfolio/p_3.png";
import Star2Img from "../../../assets/images/v1/star2.png";
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
		description: "A comprehensive look into Kutzpa's brand, identity, & blueprint",
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
		</div>
	);
}

export default PortfolioList;
