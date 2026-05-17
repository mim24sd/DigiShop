import logo2 from "../../../assets/images/logo/footer.webp";
import { appButtons, moreAppButton } from "../data";

const FooterAppBanner = () => {
    return (
        <div className="hidden lg:block rounded-2xl bg-[#3C4B6D] px-4 py-4 text-white">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex items-center gap-4">
                    <img
                        src={logo2}
                        alt="اپلیکیشن دیجی‌کالا"
                        className="h-11 w-11 rounded-xl object-cover"
                    />
                    <p className="text-base font-bold sm:text-lg">
                        دانلود اپلیکیشن دیجی‌کالا
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <div className="flex flex-wrap gap-4">
                        {appButtons.map((button) => (
                            <a key={button.title} href={button.href} aria-label={button.title}>
                                <img
                                    src={button.image}
                                    alt={button.title}
                                    className="h-11 w-36"
                                />
                            </a>
                        ))}
                    </div>

                    <a
                        href={moreAppButton.href}
                        aria-label={moreAppButton.title}
                        className="rounded-md bg-white"
                    >
                        <img
                            src={moreAppButton.image}
                            alt={moreAppButton.title}
                            className="size-11"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterAppBanner;