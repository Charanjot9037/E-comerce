import { categories } from "@/assets/assets";

const CategoriesMarquee = () => {

    return (
       <div className="overflow-hidden w-full relative max-w-7xl mx-auto select-none group sm:my-20">
  {/* Left gradient */}
  <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent" />

  {/* Marquee row */}
  <div className="flex flex-nowrap gap-4 animate-[marqueeScroll_10s_linear_infinite] sm:animate-[marqueeScroll_40s_linear_infinite] group-hover:[animation-play-state:paused]">
    {[...categories, ...categories, ...categories, ...categories].map((company, index) => (
      <button
        key={index}
        className="min-w-[120px] px-4 py-2 bg-slate-100 rounded-lg text-slate-500 text-xs sm:text-sm hover:bg-slate-600 hover:text-white active:scale-95 transition-all duration-300"
      >
        {company}
      </button>
    ))}
  </div>

  {/* Right gradient */}
  <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent" />
</div>
    );
};

export default CategoriesMarquee;