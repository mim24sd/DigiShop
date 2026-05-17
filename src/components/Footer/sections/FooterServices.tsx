import { serviceItems } from "../data";
import ServiceCard from "../ui/ServiceCard";

const FooterServices = () => {
    return (
        <div className="hidden lg:grid grid-cols-2 gap-6 pb-8 sm:grid-cols-3 lg:grid-cols-5">
            {serviceItems.map((item) => (
                <ServiceCard key={item.title} item={item} />
            ))}
        </div>
    );
};

export default FooterServices;