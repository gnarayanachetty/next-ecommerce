import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";

const Footer = () => {
	return ( <footer className="
	bg-slate-700
	text-slate-200 text-sm mt-16
	">

		<Container>
			<div className="
			flex
			flex-col
			md:flex-row
			justify-between 
			pt-16
			mb-8
			">
				<FooterList>
					<h3 className="text-bold font-bold">Shop Categories</h3>
					<Link href="#">Phones</Link>
					<Link href="#">Laptops</Link>
					<Link href="#">Desktop s</Link>
					<Link href="#">Watches</Link>
					<Link href="#">Tvs</Link>
					<Link href="#">Accessories</Link>
				</FooterList>
				<FooterList>
					<h3 className="text-bold font-bold">Customer Services</h3>
					<Link href="#">Phones</Link>
					<Link href="#">Contact Us</Link>
					<Link href="#">Desktops</Link>
					<Link href="#">Watches</Link>
					<Link href="#">Tvs</Link>
					<Link href="#">FAQs</Link>
				</FooterList>
				<div className="w-full
				 md:w-1/3 mb-6 md:mb-2"></div>

			</div>
		</Container>
	</footer> );
}

export default Footer;