import Link from "next/link";
import { draftMode } from "next/headers";

import Date from "@/components/date";
import CoverImage from "@/components/cover-image";
import Avatar from "@/components/avatar";
import MoreStories from "@/components/more-stories";
import Logo from "@/components/logo"

import { getAllPosts } from "@/lib/api";

function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  excerpt: string;
  author: any;
  slug: string;
}) {
  return (
    <section>
      <div className="flex flex-col xl:flex-row xl:space-x-8 mb-8 xl:mb-28">
        <div className="xl:w-2/3 mb-6 xl:mb-0">
          <CoverImage title={title} slug={slug} url={coverImage.url} />
        </div>
        <div className="xl:w-1/3 flex flex-col justify-end">
          <div>
            <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
              <Link href={`/posts/${slug}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="text-lg">
              <Date dateString={date} />
            </div>
          </div>
          <div className="mt-4 mb-12 xl:mb-0">
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            {author && <Avatar name={author.name} picture={author.picture} />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default async function Page() {
  const { isEnabled } = draftMode();
  const allPosts = await getAllPosts(isEnabled);
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="container mx-auto px-5">
      <Logo />
      {heroPost && (
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
      )}
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
