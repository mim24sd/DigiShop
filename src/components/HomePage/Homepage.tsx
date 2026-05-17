import BestSellerSection from "./BestSellerSection.tsx";
import ReadingSection from "./BlogPosts.tsx";
import TrendingSection from "./TrendingSection.tsx";

const bestSellerItems = [
    {
        id: 1,
        rank: 1,
        title: "نوشیدنی آناناس حاوی تکه های واقعی میوه رانی - 240 میلی لیتر بسته 6 عددی",
        image: "/images/products/1.png",
        href: "#",
    },
    {
        id: 2,
        rank: 2,
        title: "قرص بیوتان یوروویتال بسته 60 عددی",
        image: "/images/products/2.png",
        href: "#",
    },
    {
        id: 3,
        rank: 3,
        title: "قرص کافئین یوروویتال - 200 میلی گرم بسته 60 عددی",
        image: "/images/products/3.png",
        href: "#",
    },
    {
        id: 4,
        rank: 4,
        title: "کپسول زینک پلاس یورو ویتال 10 میلی گرم بسته 60 عددی",
        image: "/images/products/4.png",
        href: "#",
    },
    {
        id: 5,
        rank: 5,
        title: "لامپ ال ای دی 12 وات بوم لایتینگ مدل حبابی پایه E27 بسته 2 عددی",
        image: "/images/products/5.png",
        href: "#",
    },
    {
        id: 6,
        rank: 6,
        title: "پوشک مای بیبی مدل سری مهربان با پوست سایز 4 بسته 34 عددی",
        image: "/images/products/6.png",
        href: "#",
    },
    {
        id: 7,
        rank: 7,
        title: "قرص منیزیم پلاس آیزن و ب 6 بسته 60 عددی",
        image: "/images/products/7.png",
        href: "#",
    },
    {
        id: 8,
        rank: 8,
        title: "روغن مایع آفتابگردان ویتامینه لادن - 810 گرم",
        image: "/images/products/8.png",
        href: "#",
    },
    {
        id: 9,
        rank: 9,
        title: "آب معدنی واتا - 1500 میلی لیتر بسته 6 عددی",
        image: "/images/products/9.png",
        href: "#",
    },
    {
        id: 10,
        rank: 10,
        title: "کنسرو ماهی تن در روغن گیاهی - 180 گرم",
        image: "/images/products/10.png",
        href: "#",
    },
    {
        id: 11,
        rank: 11,
        title: "کره غیرلبنی بدون نمک گیاهی - 100 گرم",
        image: "/images/products/11.png",
        href: "#",
    },
    {
        id: 12,
        rank: 12,
        title: "پوشک مای بیبی مدل سری مهربان با پوست سایز 6 بسته 24 عددی",
        image: "/images/products/12.png",
        href: "#",
    },
];


const Homepage = () => {

    return (
       <main>
           <BestSellerSection items={bestSellerItems}/>
           <TrendingSection/>
           <ReadingSection/>
       </main>
    );
};

export default Homepage;