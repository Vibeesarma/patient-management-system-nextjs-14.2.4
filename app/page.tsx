import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src={"/assets/icons/logo-full.svg"}
            height={1000}
            width={1000}
            alt="Patient"
            className="mb-12 h-10 w-fit"
          />
        </div>
      </section>
    </main>
  );
}
