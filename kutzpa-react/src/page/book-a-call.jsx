import BreadCrumb from "../components/common/Breadcrumb";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
import { FadeInStaggerTwo, FadeInStaggerTwoChildren } from "../components/animation/FadeInStaggerTwo";
import { InlineWidget } from "react-calendly";



function BookAcall() {
	// const location = {
	// 	center: {
	// 		lat: 10.99835602,
	// 		lng: 77.01502627,
	// 	},
	// 	zoom: 11,
	// };
	return (
		<>

				<div className="section dark-bg position-relative overflow-hidden">
					<div className="container pb-100">
						<FadeInStaggerTwo className="row">
							{/* <FadeInStaggerTwoChildren className="col-lg-5">
							</FadeInStaggerTwoChildren>
							 */}

							<FadeInStaggerTwoChildren className="col-lg-12 pb-5">
								<div className="aximo-default-content text-align-center">
									<div className="centered-title">
										{/* <BreadCrumb title="book a call"/> */}
									</div>


									{/* <div className="container white-well">
										<p>Pick a day and time for a 30m video call to meet and discuss your project.</p>
									</div>
									<a href="https://calendly.com/kutzpa/30min">
											<button className="aximo-default-btn pill custom-button contact-btn">
												<span>book call!</span>
											</button>
										</a> */}

									<InlineWidget className="overflow-hidden" url="https://calendly.com/kutzpa/30min" />
								</div>
							</FadeInStaggerTwoChildren>
						</FadeInStaggerTwo>
					</div>
				</div>

			{/* <TwoColumnFaq /> */}
			{/* <Contact /> */}
		</>
	);
}

export default BookAcall;


