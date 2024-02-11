import Image from "next/image";
import InfoPost from "./InfoPost";
export default function FeaturedPost() {
  return (
    <article>
      <div className="flex -mx-4 items-center flex-wrap">
        <div className="px-4 lg:w-8/12 md:w-7/12">
          <Image
            src="/featured-thumbnail.png"
            width={500}
            height={500}
            alt=""
            className="rounded-xl w-full"
          />
        </div>
        <div className="lg:w-4/12 md:w-5/12 w-full px-4">
          <InfoPost
            category="UI DESIGN"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="UI Designer"
          />
        </div>
      </div>
    </article>
  );
}
