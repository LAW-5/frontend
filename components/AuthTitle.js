import Image from 'next/image';

const AuthTitle = () => (
  <header className="mx-auto flex items-center w-fit">
    <Image
      width={100}
      height={100}
      src="/logo-transparent.svg"
      alt="Exit Computer Mangga Two"
    />
    <h1 className="ml-4 font-semibold text-4xl">Exit Computer Mangga Two</h1>
  </header>
);

export default AuthTitle;