import {FeatureCardList} from '../ui/FeatureCardList';

export interface ProductSection {
    id: string;
    title: string;
    subtitle: string;
    link: string;
    images: string[];
}


const createImages = (prefix: string) => [
    `https://picsum.photos/seed/${prefix}-1/300/300`,
    `https://picsum.photos/seed/${prefix}-2/300/300`,
    `https://picsum.photos/seed/${prefix}-3/300/300`,
    `https://picsum.photos/seed/${prefix}-4/300/300`,
];

// eslint-disable-next-line react-refresh/only-export-components
export const MOCK_RECOMMENDATIONS: ProductSection[] = [
    {
        id: "1",
        title: "کیف و کاور گوشی",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/phone-cases",
        images: createImages("phone-case"),
    },
    {
        id: "2",
        title: "ویتامین‌ها و مواد معدنی",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/vitamins",
        images: createImages("vitamins"),
    },
    {
        id: "3",
        title: "گوشی موبایل",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/mobile",
        images: createImages("mobile"),
    },
    {
        id: "4",
        title: "هدفون، هدست و هندزفری",
        subtitle: "بر اساس سلیقه شما",
        link: "/category/audio",
        images: createImages("audio"),
    },
];
export default function SecondRecommendedCategories() {
    return (
            <section className="px-44">
                <FeatureCardList data={MOCK_RECOMMENDATIONS} />
            </section>
    );
}