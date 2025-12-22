import Image from "next/image";

const Header = () => {
  return (
    <section className="flex flex-row items-center gap-4 text-left">
      <div className="flex-1 space-y-1">
        <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight text-balance">
          Hi, I am C. Aathil Felix
        </h1>
        <p className="text-muted-foreground">Developer by passion</p>
      </div>

      <Image
        src="/profile.png"
        width={100}
        height={100}
        alt="Profile Image"
        className="rounded-full"
      />
    </section>
  );
};

export default Header;
