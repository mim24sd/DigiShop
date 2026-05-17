import FooterAppBanner from "./sections/FooterAppBanner";
import FooterDescription from "./sections/FooterDescription";
import FooterLinks from "./sections/FooterLinks";
import FooterPartners from "./sections/FooterPartners";
import FooterServices from "./sections/FooterServices";
import FooterTopBar from "./sections/FooterTopBar";

const DigiKalaFooter = () => {
    return (
        <footer dir="rtl" className="mt-auto w-full border-t border-gray-200 bg-white">
            <div className="mx-auto w-full px-4 py-8 lg:px-6">
                <div className="flex flex-col gap-0 lg:gap-8">
                    <FooterTopBar />
                    <FooterServices />
                    <FooterLinks />
                    <FooterAppBanner />
                    <FooterDescription />
                </div>
            </div>

            <FooterPartners />
        </footer>
    );
};

export default DigiKalaFooter;