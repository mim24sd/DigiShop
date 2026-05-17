import type { BadgeItem } from "../types";

type Props = {
    item: BadgeItem;
};

const BadgeCard = ({ item }: Props) => {
    return (
        <div className="flex h-[110px] w-[110px] items-center justify-center rounded-xl border border-gray-200 bg-white p-3">
            <img
                src={item.image}
                alt={item.title}
                className="h-[70px] w-[70px] object-contain"
            />
        </div>
    );
};

export default BadgeCard;