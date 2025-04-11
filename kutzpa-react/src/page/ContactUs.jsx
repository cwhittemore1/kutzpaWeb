import BreadCrumb from "../components/common/Breadcrumb";
import ContactForm from "../components/contact/ContactForm";
import TwoColumnFaq from "../components/contact/TwoColumnFaq";
function ContactUs() {
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
			{/* <ContactForm /> */}
			<button className="aximo-default-btn pill corn-btn">Click ME</button>
			<TwoColumnFaq />
		</>
	);
}

export default ContactUs;
