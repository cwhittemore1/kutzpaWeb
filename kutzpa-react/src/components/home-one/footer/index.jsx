import FooterBottom from "./FooterBottom";
import FooterContent from "./FooterContent";
import MessageForm from "./MessageForm";

function Footer() {

	return (
		<footer className="aximo-footer-section dark-bg">
			<div className="container">
				<div className="aximo-footer-top pb-5">
					<div className="row">
						<div className="col-lg-6">
							<FooterContent />
						</div>
						<div className="col-lg-6">
							<div className="aximo-form-wrap">
								<h4>Have any questions?</h4>
								<a href="mailto:example@gmail.com" className="hello">
									hello@kutzpa.com
								</a>
							</div>
						</div>

					</div>
				</div>
				<div className="aximo-footer-bottom">
					<div className="row">
						<FooterBottom />
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
