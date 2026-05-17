import React, { type ButtonHTMLAttributes, type ElementType } from "react";

type ButtonVariant = "primary" | "outline" | "ghost" | "softOrange" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon" | "text";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    variant?: ButtonVariant;
    size?: ButtonSize;
    rightIcon?: ElementType;
    leftIcon?: ElementType;
    loading?: boolean;
    className?: string;
    iconClassName?: string;
}

const TextButton = ({
                    children,
                    variant = "primary",
                    size = "md",
                    rightIcon: RightIcon,
                    leftIcon: LeftIcon,
                    loading = false,
                    className = "",
                    iconClassName = "size-[18px]",
                    type = "button",
                    disabled = false,
                    ...props
                }: ButtonProps) => {
    const baseStyles =
        "inline-flex items-center justify-center gap-2 rounded-xl transition disabled:cursor-not-allowed disabled:opacity-50";

    const variants: Record<ButtonVariant, string> = {
        primary: "bg-red-600 text-white hover:bg-red-700",
        outline: "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50",
        ghost: "bg-transparent text-gray-700 hover:bg-gray-100",
        softOrange: "bg-[#fff3e6] text-[#f57c00] hover:bg-[#ffe7cc]",
        link: "bg-transparent hover:bg-transparent shadow-none",
    };

    const sizes: Record<ButtonSize, string> = {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-ui",
        icon: "h-10 w-10 p-0",
        text: "h-auto p-0",
    };

    return (
        <button
            type={type}
            disabled={disabled || loading}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {loading ? (
                <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
                <>
                    {RightIcon ? <RightIcon className={iconClassName} /> : null}
                    {children ? <span>{children}</span> : null}
                    {LeftIcon ? <LeftIcon className={iconClassName} /> : null}
                </>
            )}
        </button>
    );
};

export default TextButton;