import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <main className="flex flex-col bg-skin-primary justify-center overflow-hidden w-svw h-svh items-center gap-5">
        <div className="flex justify-center items-center gap-5">
          <p className="text-skin-primary text-3xl sm:text-6xl">Page Not Found</p>;

          <Image
            src="/assets/images/404-error.png"
            width={300}
            height={300}
            alt="404"
          />
        </div>
        <Link href="/">
          <div className="text-skin-primary bg-skin-highlight px-5 py-2">Go back</div>

        </Link>

      </main>
    </>
  );
}