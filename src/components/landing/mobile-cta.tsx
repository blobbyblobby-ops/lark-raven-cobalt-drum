import { useEffect, useState } from "react";

export function MobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > 520;
      const distanceToEnd = document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      setShow(pastHero && distanceToEnd > 520);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={
        show
          ? "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-bg/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden"
          : "hidden"
      }
    >
      <a
        href="#join"
        className="flex h-12 items-center justify-center bg-primary text-sm font-medium text-primary-fg"
      >
        Join waitlist
      </a>
    </div>
  );
}
