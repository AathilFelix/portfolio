import Image from "next/image";

const Header = () => {
  return (
    <section className="flex flex-row-reverse max-sm:flex-col items-center gap-4 text-left max-sm:text-center">
      <Image
        src="/profile.png"
        width={100}
        height={100}
        alt="Profile Image"
        className="rounded-full max-sm:w-20 max-sm:h-20"
      />
      <div className="flex-1 space-y-1">
        <h1 className="scroll-m-20 text-4xl max-sm:text-3xl font-extrabold tracking-tight text-balance">
          Hi, I am C. Aathil Felix
        </h1>
        <p className="text-muted-foreground">Developer by passion</p>
      </div>
    </section>
  );
};

export default Header;
