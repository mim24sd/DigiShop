import ImageCategory from "../ui/ImageCategory.tsx";

const data = Array.from({length: 20}).map((_, i) => ({
    image: `https://picsum.photos/100?${i}`,
    title: `آیتم شماره ${i + 1}`,
}));

export default function CategoryCarousel() {
    return (
        <section className="w-full px-4">
            <ImageCategory items={data}/>
        </section>
    )
}