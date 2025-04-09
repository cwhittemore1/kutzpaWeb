import BadgeWhiteImg from "../../../assets/images/logo/badge-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="row align-items-center">
				<div className="col-lg-6">
					<div className="aximo-footer-logo">
						<a href="">
							<img src={BadgeWhiteImg} alt="Logo" />
						</a>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="aximo-copywright one">
						<p> &copy; Copyright 2024, All Rights Reserved by Kutzpa</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
