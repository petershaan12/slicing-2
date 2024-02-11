import InfoPost from "./InfoPost";
import Image from "next/image";
export default function CardPost({ thumbnail, ...infopost }) {
  return (
    <article>
      <Image
        src={thumbnail}
        width={500}
        height={500}
        alt=""
        className="rounded w-full mb-4"
      />
      <InfoPost {...infopost} />
    </article>
  );
}
