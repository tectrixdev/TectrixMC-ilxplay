import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses
}: {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="group relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg focus:outline-none"
      onClick={handleClick}
    >
      {/* Animated border layer */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-[-50%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500" />
      </div>
      
      {/* Content layer */}
      <span className={`relative inline-flex h-full w-full items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 m-[1px] ${otherClasses}`}>
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
