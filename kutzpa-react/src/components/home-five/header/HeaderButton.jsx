import { Link } from "react-router-dom";
function HeaderButton() {
	return (
		<div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
			<Link className="aximo-default-btn aximo-header-btn pill corn-btn" to="/book-a-call">
				<span className="aximo-label-up">Contact Us</span>
				<span className="aximo-label-up">Contact Us</span>
			</Link>
		</div>
	);
}

export default HeaderButton;
