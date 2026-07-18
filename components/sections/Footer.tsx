import { FaHeart } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-(--border) py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-(--muted)">
                    © {new Date().getFullYear()} Ashutosh Kumar. All rights reserved.
                </p>
                <p className="text-sm text-(--muted) flex items-center gap-1.5">
                    Designed & Built with
                    <FaHeart className="text-red-500 text-xs" />
                </p>
            </div>
        </footer>
    );
}
