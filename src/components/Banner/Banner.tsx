import desktopGif from "../../assets/images/banner/desktop.gif";
import mobileGif from "../../assets/images/banner/mobile.gif";

const Banner = () => {
    return (
        <div className="w-full">
            <img
                src={desktopGif}
                alt="banner"
                className="hidden lg:block w-full h-auto"
            />

            <img
                src={mobileGif}
                alt="banner"
                className="block lg:hidden w-full h-auto"
            />
        </div>
    );
};

export default Banner;