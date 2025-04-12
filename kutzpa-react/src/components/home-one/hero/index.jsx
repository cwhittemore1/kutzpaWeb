import FadeInRight from "../../animation/FadeInRight";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

function HeroSection() {
	return (
		<div className="aximo-hero-section dark-bg">
			<div className="container position-relative">
				<div className="row">
					<div className="col-lg-12">
						<HeroContent />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
