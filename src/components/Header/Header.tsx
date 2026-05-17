import DesktopHeader from "./Desktop";
import MobileHeader from "./Mobile";

const Header = () => {
    return (
        <header dir="rtl" className="w-full border-b-gray-300 shadow-xs shadow-gray-300">
            <div className="mx-auto flex w-full max-w-[1700px] flex-col px-4">
                <DesktopHeader />
                <MobileHeader />
            </div>
        </header>
    );
};

export default Header;