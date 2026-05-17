import ImageGrid, { type ImageItem } from "../ui/ImageGrid";

const images: ImageItem[] = [
    {
        id: 1,
        image:
            "https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 2,
        image:
            "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    },
];

export default function TwoImageGrid() {
    return (
        <section>
            <ImageGrid items={images} />
        </section>
    );
}