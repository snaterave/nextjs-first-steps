import { Navbar } from "@/components";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-24">
        <span className="text-lg">Hola amundo</span>
        <span className="text-7xl">{children}</span>
        <span className="text-lg">despues</span>
      </main>
    </>
  );
}
