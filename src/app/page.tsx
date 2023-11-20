import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <p className="text-center font-extrabold text-2xl">Coming soon</p>
      <Image
        src="/logotype.svg"
        alt="MyMoods Logo"
        width={414}
        height={130}
        priority
      />
      <div className="text-center">
        <p>
          Hjelper deg å trene dine mentale muskler. Der du er, når du trenger
          det.
        </p>
        <p>Kontakt: Thara Østensvik +47 934 09 651</p>
      </div>
    </main>
  );
}
