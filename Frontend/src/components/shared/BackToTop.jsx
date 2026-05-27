import { useEffect, useState } from "react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.scrollY > 300);
        };
        window.addEventListener("scroll", toggleVisibility);

        return () =>
            window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrolltoTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        visible && (
            <button
                onClick={scrolltoTop}
                className="fixed bottom-24 right-6 z-50 h-12 w-12 rounded-full bg-green-500
          text-white
          shadow-lg
          hover:scale-110
          transition-all
          duration-300"
                aria-label="Back to top"
            >
                ↑
            </button>
        )
    );
}