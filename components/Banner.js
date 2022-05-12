const Banner = ({ title }) => {
  return (
    <div className="bg-neutral-content rounded-sm p-16">
      <h1 className="text-neutral font-bold text-center text-3xl leading-relaxed flex flex-wrap max-w-xs mx-auto">{title}</h1>
    </div>
  );
}

export default Banner;