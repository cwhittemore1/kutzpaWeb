import BadgeWhiteImg from "../../../assets/images/logo/badge-white.svg";
function FooterBottom() {
	return (
		<>
			<div className="row align-items-center">
				<div className="col-lg-1">
					<div className="aximo-footer-logo">
						<a href="">
							<img src={BadgeWhiteImg} alt="Logo" />
						</a>
					</div>
				</div>
				<div className="col-lg-6">
					<span className="aximo-copywright one">
						<p> Copyright &copy; Kutzpa 2025</p>
					</span>
				</div>
			</div>
		</>
	);
}

export default FooterBottom;
