"use client";

const GlowCard = ({ children, identifier, className = "", ...articleProps }) => (
  <div className={`glow-container-${identifier} glow-container`}>
    <article {...articleProps} data-card-glow className={`glow-card glow-card-${identifier} h-fit border relative text-gray-200 rounded-xl w-full ${className}`}>
      {children}
    </article>
  </div>
);

export default GlowCard;
