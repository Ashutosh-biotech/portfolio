export default function HeroBackground() {
    return (
        <div
            aria-hidden
            className="absolute inset-0 overflow-hidden pointer-events-none top-20"
        >
            {/* Ambient Glow */}
            <div
                className="absolute right-[10%] top-1/2 h-105 w-105 -translate-y-1/2 rounded-full blur-[140px] opacity-20"
                style={{ background: "var(--primary)" }}
            />

            <div
                className="absolute right-[22%] top-[35%] h-55 w-55 rounded-full blur-[90px] opacity-20"
                style={{ background: "var(--cyan)" }}
            />

            {/* Dot Layer 1 */}
            <div
                className="absolute right-0 top-10 h-150 w-190"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(96,165,250,.18) 1.4px, transparent 1.4px)",
                    backgroundSize: "28px 28px",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, black 20%, transparent 90%)",
                    maskImage:
                        "radial-gradient(circle at center, black 20%, transparent 90%)",
                }}
            />

            {/* Dot Layer 2 */}
            <div
                className="absolute right-6 top-14 h-140 w-175"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,.55) .8px, transparent .8px)",
                    backgroundSize: "18px 18px",
                    WebkitMaskImage:
                        "radial-gradient(circle at center, black 25%, transparent 85%)",
                    maskImage:
                        "radial-gradient(circle at center, black 25%, transparent 85%)",
                }}
            />
        </div>
    );
}