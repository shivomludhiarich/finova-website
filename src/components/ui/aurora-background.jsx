import { cn } from "../../lib/utils";

export default function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  ...props
}) {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-screen items-center justify-center bg-black text-white overflow-hidden",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)]
              [--aurora:repeating-linear-gradient(100deg,#00e5ff_10%,#22d3ee_15%,#06b6d4_20%,#67e8f9_25%,#00e5ff_30%)]

              [background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,200%]
              [background-position:50%_50%,50%_50%]

              filter blur-[40px]
              opacity-50
              absolute -inset-[10px]

              after:content-['']
              after:absolute
              after:inset-0
              after:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,100%]
              after:animate-aurora
              after:mix-blend-screen
              `,
              showRadialGradient &&
                "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]"
            )}
          />
        </div>

        {children}
      </div>
    </main>
  );
}
