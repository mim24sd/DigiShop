import React from "react";

export type ImageItem = {
    id: number;
    image: string;
    href?: string;
};

type ImageGridProps = {
    items: ImageItem[];
    className?: string;
    imgClassName?: string;
};

const getGridCols = (count: number) => {
    if (count <= 1) return "grid-cols-1";
    if (count === 2) return "grid-cols-2";
    if (count === 3) return "grid-cols-3";
    if (count === 4) return "grid-cols-2 md:grid-cols-4";
    if (count <= 6) return "grid-cols-2 md:grid-cols-3";
    return "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5";
};

const ImageGrid: React.FC<ImageGridProps> = ({
                                                 items,
                                                 className = "",
                                                 imgClassName = "",
                                             }) => {
    const gridCols = getGridCols(items.length);
    const appGridCols = getGridCols(items.length / 2);

    return (
        <div className="w-full max-w-[1360px] sm:mx-auto px-0 lg:px-4 xl:px-0">
            <div
                dir="rtl"
                className={`grid ${appGridCols} lg:${gridCols} gap-3 max-w-[1360px] m-auto px-4 lg:px-0 ${className}`}
            >
                {items.map((item) => (
                    <a
                        key={item.id}
                        href={item.href ?? "#"}
                        className="block overflow-hidden rounded-xl "
                    >
                        <img
                            src={item.image}
                            alt=""
                            loading="lazy"
                            className={`w-full h-[clamp(116px,20vw,244px)] object-cover transition duration-300 ${imgClassName}`}
                        />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default ImageGrid;