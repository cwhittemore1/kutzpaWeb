import { Link } from "react-router-dom";
import LinkImg from "../../../assets/images/icon/link2.svg";

function PortfolioCard({ portfolio: { title, description, img } }) {
	return (
		<>
			
				<div className="aximo-project-thumb3">
					<a href="/single-portfolio"><img src={img} alt={title} /></a>

					<Link to="/single-portfolio" className="aximo-project-link project-link-text">
						view
					</Link>
				</div>
				
				<div className="aximo-project-data3 px-4 pb-4">
					<h3>
						<Link to="/single-portfolio">{title}</Link>
					</h3>
					<p>{description}</p>
				</div>
		</>
	);
}

export default PortfolioCard;
