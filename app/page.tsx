import {
    Download,
    Sparkles,
    ShieldCheck,
    Zap,
    Brain,
    Github,
    Bot,
    Heart,
} from "lucide-react";
import { ThemeToggle } from "@/components/themeToggler";
import { Button } from "@/components/ui/button";

const featurePills = [
    { icon: Brain, text: "Context-Aware" },
    { icon: Zap, text: "Fast Hints" },
    { icon: ShieldCheck, text: "No Spoilers" },
    { icon: Sparkles, text: "Multi-Model" },
];

export default function Landing() {
    return (
        <div
            className="relative mx-auto min-h-screen w-full max-w-[1400px] overflow-hidden"
            id="top"
        >
            <header className="mx-auto flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-2 font-semibold tracking-tight">
                    <div className="flex items-center gap-2 px-2 py-1 text-xl">
                        <span>LeetAid</span>
                        <Bot size={20} />
                    </div>
                    <span className="text-muted-foreground hidden rounded-xl px-2 py-1 text-xs shadow sm:inline">
                        Focused AI Hints
                    </span>
                </div>
                <div className="flex items-center gap-3">
                    <ThemeToggle />
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-background/70 hover:bg-muted inline-flex h-9 w-9 items-center justify-center rounded-md backdrop-blur transition-colors"
                    >
                        <Github className="h-4 w-4" />
                    </a>

                    <Button asChild variant="outline">
                        <a
                            href="https://chromewebstore.google.com/detail/leetaid/dffaiabdehidiffemahgpffghnppddic"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Download className="h-4 w-4 transition-transform group-hover:scale-110" />
                            <span>Install</span>
                        </a>
                    </Button>
                </div>
            </header>
            <main className="relative">
                <section className="pt-10 pb-20 md:pt-20 md:pb-28">
                    <div className="relative mx-auto max-w-5xl px-6 text-center">
                        <div className="border-border/60 bg-background/60 text-muted-foreground mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide uppercase shadow-sm backdrop-blur">
                            <Sparkles className="text-primary h-3.5 w-3.5" />{" "}
                            <span>Built for Deliberate Practice</span>
                        </div>
                        <h1 className="relative mx-auto max-w-4xl text-center text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl">
                            <span>Train Your </span>
                            <span className="text-primary inline-block">
                                Intuition
                            </span>
                            <br className="" />
                            <span className="text-balance">
                                Not Your Copy/Paste Muscle
                            </span>
                        </h1>
                        <p className="text-foreground/80 mx-auto mt-6 max-w-3xl text-base leading-relaxed md:text-lg">
                            Real-time AI hints that guide without spoiling.
                            LeetAid observes your code evolution & nudges
                            reasoning just before frustration turns into
                            avoidance.
                        </p>
                        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                            <Button asChild variant="default">
                                <a
                                    href="https://chromewebstore.google.com/detail/leetaid/dffaiabdehidiffemahgpffghnppddic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="flex items-center gap-2">
                                        <Download className="h-5 w-5" /> Install
                                        Extension
                                    </span>
                                </a>
                            </Button>
                            <Button asChild variant="outline">
                                <a
                                    href="#why"
                                    className="neo-btn border-border hover:bg-muted/60 border bg-transparent px-8 py-4 text-base font-medium"
                                >
                                    How It Works
                                </a>
                            </Button>
                        </div>
                        <div className="mt-12 flex flex-wrap justify-center gap-3">
                            {featurePills.map((f) => (
                                <div
                                    key={f.text}
                                    className="border-border/60 bg-background/60 text-muted-foreground flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur"
                                >
                                    <f.icon className="h-3.5 w-3.5" /> {f.text}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <section id="why" className="pb-28">
                    <div className="mx-auto max-w-7xl px-3 md:px-6">
                        <div className="glass relative overflow-hidden rounded-xl p-8 md:p-12">
                            <div className="from-primary/10 via-accent/10 pointer-events-none absolute inset-0 bg-gradient-to-br to-transparent [mask-image:radial-gradient(circle_at_center,black,transparent)]" />
                            <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
                                How It Works
                            </h2>
                            <p className="text-muted-foreground max-w-2xl text-sm leading-relaxed md:text-base">
                                Up & running in under 30 seconds. No account.
                                Your key stays local.
                            </p>
                            <ol
                                className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
                                aria-label="Steps to start using LeetAid"
                            >
                                <li className="group border-border/60 bg-background/60 relative flex flex-col gap-2 rounded-lg border p-4 backdrop-blur transition-colors">
                                    <div className="flex items-center gap-2 text-sm font-semibold">
                                        <span className="bg-primary/10 text-primary group-hover:bg-primary/15 flex h-7 w-7 items-center justify-center rounded-md font-mono text-[11px]">
                                            1
                                        </span>
                                        <span>Install</span>
                                    </div>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        Grab it from the Chrome Web Store. Pin
                                        it if you like fast access.
                                    </p>
                                    <a
                                        href="https://chromewebstore.google.com/detail/leetaid/dffaiabdehidiffemahgpffghnppddic"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary focus-visible:ring-ring/50 inline-flex w-fit items-center gap-1 text-[11px] font-medium hover:underline focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                                    >
                                        Open Store →
                                    </a>
                                </li>
                                <li className="group border-border/60 bg-background/60 relative flex flex-col gap-2 rounded-lg border p-4 backdrop-blur transition-colors">
                                    <div className="flex items-center gap-2 text-sm font-semibold">
                                        <span className="bg-primary/10 text-primary group-hover:bg-primary/15 flex h-7 w-7 items-center justify-center rounded-md font-mono text-[11px]">
                                            2
                                        </span>
                                        <span>Pick Model</span>
                                    </div>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        Open the popup → choose a model → paste
                                        your API key. Stored locally, never sent
                                        to us.
                                    </p>
                                    <div className="text-muted-foreground/70 font-mono text-[11px]">
                                        Tip: you can switch models anytime.
                                    </div>
                                </li>
                                <li className="group border-border/60 bg-background/60 relative flex flex-col gap-2 rounded-lg border p-4 backdrop-blur transition-colors">
                                    <div className="flex items-center gap-2 text-sm font-semibold">
                                        <span className="bg-primary/10 text-primary group-hover:bg-primary/15 flex h-7 w-7 items-center justify-center rounded-md font-mono text-[11px]">
                                            3
                                        </span>
                                        <span>Start Hinting</span>
                                    </div>
                                    <p className="text-muted-foreground text-xs leading-relaxed">
                                        Open any LeetCode problem. Your side
                                        chat buddy appears. Type a question or
                                        request a nudge.
                                    </p>
                                    <div className="text-muted-foreground/70 flex items-center gap-1 font-mono text-[11px]">
                                        No full solutions—just escalated hints.
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="text-muted-foreground flex items-center justify-center gap-2 pb-10 text-center text-[11px]">
                <p>© {new Date().getFullYear()}</p>
                <span className="flex items-center gap-1">
                    <span>LeetAid – Made with</span>{" "}
                    <Heart size={14} className="text-rose-500" />{" "}
                    <span>
                        by{" "}
                        <a
                            className="hover:underline"
                            href="https://github.com/TahirIqbal095/"
                        >
                            Tahir Iqbal
                        </a>
                    </span>
                </span>
            </footer>
        </div>
    );
}
