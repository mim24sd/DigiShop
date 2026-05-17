type DiscountCircleItemProps = {
    image: string;
    discountPercent: number;
    size?: number;
};

const DiscountCircleItem: React.FC<DiscountCircleItemProps> = ({
                                                                   image,
                                                                   discountPercent,
                                                                   size = 74,
                                                               }) => {
    return (
        <div className="relative shrink-0">
            <div
                className="flex items-center justify-center rounded-full "
                style={{ width: size, height: size }}
            >
                <img
                    src={image}
                    alt="product"
                    className="h-full w-full rounded-full object-cover"
                />
            </div>

            <div className="absolute bottom-0 right-1 flex items-center justify-center rounded-full bg-red-600 p-1 text-xs text-white">
                <span dir="ltr">{discountPercent}%</span>
            </div>
        </div>
    );
};

export default DiscountCircleItem;