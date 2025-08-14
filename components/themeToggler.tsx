"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
    iconSize?: string;
    tittle?: string;
    style?: React.CSSProperties;
    className?: string;
}

export function ThemeToggle({
    iconSize = "5",
    tittle,
    style,
    className,
}: ThemeToggleProps) {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return (
            <Button
                variant="ghost"
                aria-label="Toggle theme"
                className="m-0 flex items-center gap-1 p-0"
            >
                <Sun size={iconSize} />
                {tittle && <span>{tittle}</span>}
            </Button>
        );
    }

    const isDark =
        (theme ?? resolvedTheme) === "dark" || resolvedTheme === "dark";

    return (
        <Button
            variant="ghost"
            aria-label="Toggle theme"
            className={className}
            style={style}
            onClick={() => setTheme(isDark ? "light" : "dark")}
        >
            {isDark ? <Sun size={iconSize} /> : <Moon size={iconSize} />}
            {tittle && <span>{tittle}</span>}
        </Button>
    );
}
