import InfoPost from "./InfoPost";
import Image from "next/image";
import Link from "next/link";
export default function CardPost({ thumbnail, ...infopost }) {
  return (
    <article>
      <Link href="/detail">
        <Image
          src={thumbnail}
          width={500}
          height={500}
          alt=""
          className="rounded w-full mb-4"
        />
      </Link>
      <InfoPost {...infopost} />
    </article>
  );
}
