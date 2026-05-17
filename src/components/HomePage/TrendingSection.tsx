import { useEffect, useState } from "react";

type Product = {
    id: number;
    title_fa: string;
    images?: {
        main?: {
            url?: string[];
        };
    };
};

type TrendingResponse = {
    status: number;
    data: {
        title: string;
        products: Product[];
    };
};

const TrendingSection = () => {
    const [title, setTitle] = useState("داغ ترین چند ساعت گذشته");
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchTrendingProducts() {
            try {
                setLoading(true);
                setError("");

                const response = await fetch("/api/digiikala/trending/");

                if (!response.ok) {
                    throw new Error("خطا در دریافت اطلاعات");
                }

                const result: TrendingResponse = await response.json();

                setTitle(result?.data?.title || "داغ ترین چند ساعت گذشته");
                setProducts(result?.data?.products || []);
            } catch {
                setError("دریافت محصولات با مشکل مواجه شد.");
            } finally {
                setLoading(false);
            }
        }

        fetchTrendingProducts().catch((error) => {
            console.error(error);
        });
    }, []);

    if (loading) {
        return (
            <section dir="rtl" className="w-full rounded-2xl border border-gray-200 bg-white p-4">
                <h2 className="mb-4 text-base font-medium text-gray-800">در حال بارگذاری...</h2>

                <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-gray-200 sm:grid-cols-3 lg:grid-cols-6">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div
                            key={index}
                            className="flex min-h-[220px] animate-pulse flex-col items-center justify-start border border-gray-100 p-4"
                        >
                            <div className="mb-4 h-32 w-32 rounded-lg bg-gray-200" />
                            <div className="h-4 w-24 rounded bg-gray-200" />
                            <div className="mt-2 h-4 w-32 rounded bg-gray-200" />
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section
                dir="rtl"
                className="w-full rounded-2xl border border-red-200 bg-white p-4 text-sm text-red-500"
            >
                {error}
            </section>
        );
    }

    return (
        <section
            dir="rtl"
            className="w-full rounded-2xl border border-gray-200 bg-white"
        >
            <div className="flex items-center justify-center border-b border-gray-200 px-4 py-4">
                <h2 className="text-xl text-gray-800">{title}</h2>
            </div>

            <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-6">
                {products.map((item) => (
                    <div
                        key={item.id}
                        className="group flex min-h-[220px] flex-col items-center justify-start border-l border-b border-gray-200 p-4 transition hover:shadow-sm"
                    >
                        <div className="flex h-36 w-full items-center justify-center">
                            <img
                                src={item.images?.main?.url?.[0] || ""}
                                alt={item.title_fa}
                                className="h-32 w-32 object-contain transition duration-300 group-hover:scale-105"
                            />
                        </div>

                        <p className="mt-3 line-clamp-2 text-center text-sm leading-6 text-gray-700">
                            {item.title_fa}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TrendingSection;