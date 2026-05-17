import { footerCopyright, partnerLogos } from "../data";
import PartnerLogoCard from "../ui/PartnerLogoCard";

const FooterPartners = () => {
    return (
        <div className="w-full hidden lg:block">
            <p className="px-6 pb-8 text-center text-xs leading-7 text-gray-400">
                {footerCopyright}
            </p>

            <div className="grid w-full grid-cols-2 border-y border-gray-300 bg-gray-100 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9">
                {partnerLogos.map((item, index) => (
                    <PartnerLogoCard key={`${item.title}-${index}`} item={item} />
                ))}
            </div>
        </div>
    );
};

export default FooterPartners;