import type { ServiceItem } from "../types";

type Props = {
    item: ServiceItem;
};

const ServiceCard = ({ item }: Props) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 text-center">
            <img
                src={item.image}
                alt={item.title}
                className="h-14 w-14 rounded-xl object-contain"
            />
            <span className="text-xs leading-6 text-gray-700 sm:text-sm">
        {item.title}
      </span>
        </div>
    );
};

export default ServiceCard;