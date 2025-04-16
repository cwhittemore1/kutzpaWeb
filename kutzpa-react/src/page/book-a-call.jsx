import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../components/animation/FadeInStaggerTwo";
// import { DotLottieReact } from '@lottiefiles/dotlottie-react';



function BookAcall() {
	const location = {
		center: {
			lat: 10.99835602,
			lng: 77.01502627,
		},
		zoom: 11,
	};
	return (
		<>
			<BreadCrumb title="book a call" />
				<div className="section dark-bg position-relative overflow-hidden">
					<div className="container">
						<FadeInStaggerTwo className="row">
							{/* <FadeInStaggerTwoChildren className="col-lg-5">
							</FadeInStaggerTwoChildren>
							 */}

							<FadeInStaggerTwoChildren className="col-lg-12 pb-5 styles">
								<div className="aximo-default-content text-align-right">
									{/* <h1 className="pb-3">
										
									</h1> */}
									<p>Pick a day and time for a 30m video call to meet and discuss your project.</p>

									<a href="https://calendly.com/kutzpa/30min">
										<button className="aximo-default-btn pill custom-button contact-btn">
											<span>book call!</span>
										</button>
									</a>
								</div>
							</FadeInStaggerTwoChildren>
						</FadeInStaggerTwo>
					</div>
				</div>
			<TwoColumnFaq />
			{/* <Contact /> */}
		</>
	);
}

export default BookAcall;


