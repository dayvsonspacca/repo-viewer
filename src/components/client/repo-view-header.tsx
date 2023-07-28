"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";
import { GithubRepoContentInterface } from "@/components/types";
import { useAppContext } from "@/components/app-context";

export default function RepoViewHeader() {
  const { repos, user, setRepoContent, setSelectedRepo } = useAppContext();

  const handleSelectChange = async (option: string) => {
    const repoContent = await getRepoContent(option);
    setRepoContent(repoContent);
    setSelectedRepo(option);
  };

  const getRepoContent = async (option: string) => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/" + user + "/" + option + "/contents",
        {
          cache: "force-cache",
        }
      );

      const repos = await response.json();
      let repoContent: Array<GithubRepoContentInterface> = [];

      repos.forEach((repo: GithubRepoContentInterface) => {
        repoContent.push(repo);
      });

      repoContent.sort((a, b) => {
        if (a.type === "dir" && b.type !== "dir") return -1;
        if (a.type !== "dir" && b.type === "dir") return 1;
        return 0;
      });

      return repoContent;
    } catch (error) {
      console.error("Error fetching repository content:", error);
      throw error;
    }
  };

  return (
    <header className="bg-zinc-100 w-full h-12 dark:bg-secondary flex items-center">
      <Select onValueChange={(option) => handleSelectChange(option)}>
        <SelectTrigger className="w-[220px] h-8 ml-3">
          <SelectValue placeholder="Selecione o repositório..." />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="h-[200px]">
            {repos.map((repo, index) => {
              return (
                <SelectItem key={index} value={repo}>
                  {repo}
                </SelectItem>
              );
            })}
          </ScrollArea>
        </SelectContent>
      </Select>
    </header>
  );
}
