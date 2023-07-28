'use client';
import React, { ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useAppContext } from "@/components/app-context";

export default function GithubUserSeacrh() {
  const { user, userChange, setRepositories } = useAppContext();

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    userChange(event.target.value);
  };

  const handleUserChange = async () => {
    const repos = await getRepositories(); 

    setRepositories(repos);
  }

  const getRepositories = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/" + user + "/repos",
        {
          cache: "force-cache",
        }
      );

      const repos = await response.json();
      let selectOptions: Array<string> = [];

      repos.forEach((repo: GithubRepoInterface) => {
        selectOptions.push(repo.name);
      });

      return selectOptions;
    } catch (error) {
      console.error("Error fetching repositories:", error);
      throw error;
    }
  };

  return (
    <div className="w-64 flex gap-3 ">
      <Input
        type="text"
        placeholder="Github user.."
        className="transition-all"
        value={user}
        onChange={handleInputChange}
      />
      <Button
        variant="outline"
        size="icon"
        onClick={handleUserChange}
      >
        <MagnifyingGlassIcon className="h-[1.2rem] w-[1.2rem] transition-all" />
      </Button>
    </div>
  );
}

interface GithubRepoInterface {
  name: string;
}
