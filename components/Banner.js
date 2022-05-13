const Banner = ({ title, children }) => {
  return (
    <div className="bg-neutral-content rounded-sm p-16">
      <h1 className="text-neutral font-bold text-center text-3xl leading-relaxed flex-wrap max-w-xs mx-auto flex justify-center">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default Banner;
