"use client";

import { useState, useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

interface ContributionDay {
    color: string;
    contributionCount: number;
    contributionLevel: string;
    date: string;
    isEmptyPlaceholder?: boolean;
}

type ContributionWeek = ContributionDay[];

// Generate a fallback contribution grid if fetching fails
function generateMockGrid(): ContributionWeek[] {
    const weeksCount = 20;
    const daysCount = 7;
    const mockWeeks: ContributionWeek[] = [];

    for (let w = 0; w < weeksCount; w++) {
        const week: ContributionDay[] = [];
        for (let d = 0; d < daysCount; d++) {
            const rand = Math.random();
            let level = "NONE";
            let count = 0;
            if (rand < 0.35) {
                level = "NONE";
                count = 0;
            } else if (rand < 0.6) {
                level = "FIRST_QUARTILE";
                count = Math.floor(Math.random() * 3) + 1;
            } else if (rand < 0.8) {
                level = "SECOND_QUARTILE";
                count = Math.floor(Math.random() * 4) + 4;
            } else if (rand < 0.93) {
                level = "THIRD_QUARTILE";
                count = Math.floor(Math.random() * 5) + 8;
            } else {
                level = "FOURTH_QUARTILE";
                count = Math.floor(Math.random() * 10) + 13;
            }

            // Generate dates in the past
            const dateObj = new Date();
            dateObj.setDate(dateObj.getDate() - ((weeksCount - w) * 7 + (6 - d)));
            const dateStr = dateObj.toISOString().split("T")[0];

            week.push({
                color: "",
                contributionCount: count,
                contributionLevel: level,
                date: dateStr,
            });
        }
        mockWeeks.push(week);
    }
    return mockWeeks;
}

const levelColors: Record<string, string> = {
    NONE: "bg-white/5 hover:bg-white/10",
    FIRST_QUARTILE: "bg-emerald-950/60 border border-emerald-900/30",
    SECOND_QUARTILE: "bg-emerald-800/70",
    THIRD_QUARTILE: "bg-emerald-600/80",
    FOURTH_QUARTILE: "bg-emerald-400",
};

export default function GitHubActivity() {
    const [weeks, setWeeks] = useState<ContributionWeek[]>([]);
    const [totalContributions, setTotalContributions] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [isFallback, setIsFallback] = useState<boolean>(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        async function fetchContributions() {
            try {
                setLoading(true);
                const res = await fetch("https://github-contributions-api.deno.dev/Ashutosh-biotech.json");
                if (!res.ok) throw new Error("Failed to fetch GitHub contributions");
                const data = await res.json();

                let fetchedWeeks: ContributionWeek[] = data.contributions;

                // Pad the last week to 7 days if necessary
                if (fetchedWeeks.length > 0) {
                    const lastWeek = fetchedWeeks[fetchedWeeks.length - 1];
                    if (lastWeek.length < 7) {
                        const paddedLastWeek = [...lastWeek];
                        while (paddedLastWeek.length < 7) {
                            paddedLastWeek.push({
                                color: "transparent",
                                contributionCount: 0,
                                contributionLevel: "NONE",
                                date: "",
                                isEmptyPlaceholder: true,
                            });
                        }
                        fetchedWeeks = [...fetchedWeeks.slice(0, -1), paddedLastWeek];
                    }
                }

                setWeeks(fetchedWeeks);
                setTotalContributions(data.totalContributions);
                setIsFallback(false);
            } catch (err) {
                console.error("Error fetching live GitHub contributions:", err);
                setWeeks(generateMockGrid());
                setIsFallback(true);
            } finally {
                setLoading(false);
            }
        }
        fetchContributions();
    }, []);

    useEffect(() => {
        if (!loading && scrollContainerRef.current) {
            // Scroll to the end of the grid (most recent activity)
            scrollContainerRef.current.scrollLeft = scrollContainerRef.current.scrollWidth;
        }
    }, [loading]);

    const getTooltipText = (day: ContributionDay) => {
        if (day.isEmptyPlaceholder || !day.date) return "";
        const dateStr = new Date(day.date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        });
        return `${day.contributionCount} ${day.contributionCount === 1 ? "contribution" : "contributions"} on ${dateStr}`;
    };

    return (
        <div className="rounded-2xl border border-(--border) bg-(--card) p-6 lg:p-8">
            <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-(--text)">
                        GitHub Activity
                    </h3>
                    <FaGithub className="text-(--text-secondary) text-xl" />
                </div>
                {isFallback && (
                    <span className="text-[10px] bg-white/5 text-(--muted) px-2 py-0.5 rounded-full">
                        Demo Mode
                    </span>
                )}
            </div>
            
            <p className="text-sm text-(--muted) mb-6">
                {loading ? (
                    "Loading contribution data..."
                ) : isFallback ? (
                    "contributions in the last year (cached/fallback)"
                ) : (
                    <span>
                        <strong className="text-(--text) font-semibold">{totalContributions?.toLocaleString()}</strong> contributions in the last year
                    </span>
                )}
            </p>

            {/* Contribution Grid */}
            <div 
                ref={scrollContainerRef}
                className="flex gap-1 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-white/10"
            >
                {loading ? (
                    // Skeleton loader
                    <div className="flex gap-1 animate-pulse">
                        {Array.from({ length: 40 }).map((_, wi) => (
                            <div key={wi} className="flex flex-col gap-1">
                                {Array.from({ length: 7 }).map((_, di) => (
                                    <div
                                        key={di}
                                        className="w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-sm bg-white/5"
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex gap-1 items-stretch">
                        {/* Weekday labels */}
                        <div className="flex flex-col gap-1 pr-1.5 text-[9px] text-(--muted) select-none">
                            <span className="h-3 lg:h-3.5 flex items-center justify-end"></span>
                            <span className="h-3 lg:h-3.5 flex items-center justify-end">Mon</span>
                            <span className="h-3 lg:h-3.5 flex items-center justify-end"></span>
                            <span className="h-3 lg:h-3.5 flex items-center justify-end">Wed</span>
                            <span className="h-3 lg:h-3.5 flex items-center justify-end"></span>
                            <span className="h-3 lg:h-3.5 flex items-center justify-end">Fri</span>
                            <span className="h-3 lg:h-3.5 flex items-center justify-end"></span>
                        </div>

                        {/* Weeks */}
                        {weeks.map((week, wi) => (
                            <div key={wi} className="flex flex-col gap-1">
                                {week.map((day, di) => (
                                    <div
                                        key={di}
                                        title={getTooltipText(day)}
                                        className={`w-3 h-3 lg:w-3.5 lg:h-3.5 rounded-sm transition-all duration-150 hover:scale-130 hover:z-10 cursor-pointer ${
                                            day.isEmptyPlaceholder
                                                ? "bg-transparent pointer-events-none"
                                                : levelColors[day.contributionLevel] ?? "bg-white/5"
                                        }`}
                                    ></div>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Legend & Link */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-4 text-xs text-(--muted)">
                <Link
                    href="https://github.com/Ashutosh-biotech"
                    target="_blank"
                    className="inline-flex items-center gap-2 font-medium text-(--primary) hover:text-(--primary-light) transition-colors duration-300"
                >
                    View My GitHub Profile
                    <FiArrowRight />
                </Link>

                <div className="flex items-center gap-1.5 text-[11px]">
                    <span>Less</span>
                    <div className="w-2.5 h-2.5 rounded-sm bg-white/5"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-950/60 border border-emerald-900/30"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-800/70"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-600/80"></div>
                    <div className="w-2.5 h-2.5 rounded-sm bg-emerald-400"></div>
                    <span>More</span>
                </div>
            </div>
        </div>
    );
}

