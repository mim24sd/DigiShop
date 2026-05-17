
import IconCategory from "../ui/IconCategory.tsx";

const data = [
    {
        image: "https://picsum.photos/100?1",
        title: "گوشی موبایل",
    },
    {
        image: "https://picsum.photos/100?2",
        title: "لپ تاپ",
    },
    {
        image: "https://picsum.photos/100?3",
        title: "هدفون",
    },
    {
        image: "https://picsum.photos/100?4",
        title: "ساعت هوشمند",
    },
    {
        image: "https://picsum.photos/100?5",
        title: "کنسول بازی",
    },
    {
        image: "https://picsum.photos/100?6",
        title: "دوربین",
    },
    {
        image: "https://picsum.photos/100?7",
        title: "تلویزیون",
    },
    {
        image: "https://picsum.photos/100?8",
        title: "تبلت",
    },
    {
        image: "https://picsum.photos/100?9",
        title: "اسپیکر",
    },
    {
        image: "https://picsum.photos/100?10",
        title: "اضافی",
    },
];

export default function QuickAccessList() {
    return <IconCategory items={data} />;
}