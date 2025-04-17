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
		title: "Kutzpa Identity",
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

			{/* <div className="container py-5 coming-soon-container">
				<div className="row px-4">
						<div className="container">
							<p className=" coming-soon-title pb-3 px-4"><b>Upcoming projects</b></p>
						</div>

						<div className="container"> 
							<div className="row">
								<div className="col-lg-4 mb-3">
									<div className="coming-soon-wrapper comingSoon1">
										<p className="mb-0"><b>Ventura</b></p>
										<p>Ventura is a travel app for everyone designed for authentic joy and exploration.</p>
									</div>
								</div>
								<div className="col-lg-4 mb-3">
									<div className="coming-soon-wrapper comingSoon2">
										<p className="mb-0"><b>Palate</b></p>
										<p>Palate is a marketplace for food freelancers to build their own financial freedom.</p>
									</div>
								</div>
								<div className="col-lg-4 mb-3">
									<div className="coming-soon-wrapper comingSoon3">
										<p className="mb-0"><b>Magic Lanterns</b></p>
										<p>Magic Lanterns is the story of film and animation across time, split into mini chapters.</p>
									</div>
								</div>
							</div>
						</div>
				</div>

			</div> */}
		</div>
	);
}

export default PortfolioList;
