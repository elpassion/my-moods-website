import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-12">
      <Image
        src="/logotype.svg"
        alt="MyMoods Logo"
        width={414}
        height={130}
        priority
      />
      <div className={poppins.className}>
        <p className="text-center">
          Hjelper deg å trene dine mentale muskler. Der du er, når du trenger
          det.
        </p>
        <p className="text-center">Kontakt: Thara Østensvik +47 934 09 651</p>
      </div>
    </main>
  );
}
