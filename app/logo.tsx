import ContentfulImage from "@/lib/contentful-image"
import Link from "next/link";

export default function Logo() {
  return (
    <header className="flex flex-col items-center justify-center p-8 ">
      <Link href="/">
        <ContentfulImage 
          src="https://images.ctfassets.net/mplpspx0ig21/7p1U4i0epkduvjFv9TbFGu/b3f9b7d032cba84085476b8a1d91233d/pocket-change.svg" 
          alt="Ibotta Logo" 
          width={350} 
          height={150} 
        />
      </Link>

    </header>
  )
}