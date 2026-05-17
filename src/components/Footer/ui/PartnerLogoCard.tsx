import type { PartnerLogoItem } from "../types";

type Props = {
    item: PartnerLogoItem;
};

const PartnerLogoCard = ({ item }: Props) => {
    return (
        <div className="flex h-[80px] items-center justify-center border border-gray-300 bg-gray-100 p-4">
            <img
                src={item.image}
                alt={item.title}
                className="max-h-5 w-auto object-contain grayscale"
            />
        </div>
    );
};

export default PartnerLogoCard;