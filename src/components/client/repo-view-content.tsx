"use client";

import { useAppContext } from "@/components/app-context";
import { GithubRepoContentInterface } from "@/components/types";
import { Button } from "@/components/ui/button";

import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FileIcon, ArchiveIcon, DownloadIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RepoViewContent() {
  const { repoContent, user, setRepoContent, selectedRepo } = useAppContext();

  const handleOpenFolder = async (folder: string) => {
    try {
      const response = await fetch(
        "https://api.github.com/repos/" +
          user +
          "/" +
          selectedRepo +
          "/contents" +
          folder,
        {
          cache: "force-cache",
        }
      );

      const repos = await response.json();
      let dirContent: Array<GithubRepoContentInterface> = [];

      repos.forEach((repo: GithubRepoContentInterface) => {
        dirContent.push(repo);
      });

      dirContent.sort((a, b) => {
        if (a.type === "dir" && b.type !== "dir") return -1;
        if (a.type !== "dir" && b.type === "dir") return 1;
        return 0;
      });

      setRepoContent(dirContent);
    } catch (error) {
      console.error("Error fetching repository content:", error);
      throw error;
    }
  };

  return (
    <Table>
      <TableBody>
        {repoContent.map((file: GithubRepoContentInterface, index) => {
          return (
            <TableRow
              key={index}
              onClick={() =>
                file.type === "dir"
                  ? file.path && handleOpenFolder(file.path)
                  : ""
              }
            >
              <TableCell className="flex items-center gap-4">
                {file.type === "dir" ? <ArchiveIcon /> : <FileIcon />}
                {file.name}
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell className="text-right">
                {file.type === "file" && file.download_url ? (
                  <Link
                    target="_blank"
                    href={file.download_url}
                    download={file.name}
                  >
                    <Button variant="outline" size="icon" className="w-8 h-8">
                      <DownloadIcon className="h-4 w-4" />
                    </Button>
                  </Link>
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
