import { ThemeToggle } from "@/components/client/theme-toggle";
import GithubUserSeacrh from "@/components/client/github-user-search";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";


export default function Header() {
  return (
    <header className="bg-zinc-100 transition-all bg-card shadow-sm dark:shadow-sm dark:shadow-primary-foreground w-screen h-12 flex items-center justify-between">
      <div className="font-bold text-2xl ml-5 transition-all">
        <span className="text-sky-500 transition-all">Repo</span>Viewer
      </div>

      <GithubUserSeacrh />

      <div className="mr-5 flex gap-2">
        <Link
          href="https://github.com/dayvsonspacca"
          prefetch
          target="_blank"
          className={
            buttonVariants({ variant: "ghost", size: "icon" }) +
            " transition-opacity ease-out active:opacity-0"
          }
        >
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Link>
        <Link
          href="https://www.linkedin.com/in/dayvson-spacca-b88402234/"
          prefetch
          target="_blank"
          className={
            buttonVariants({ variant: "ghost", size: "icon" }) +
            " transition-opacity ease-out active:opacity-0"
          }
        >
          <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
