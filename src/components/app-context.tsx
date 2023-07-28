"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface AppContextType {
  repos: Array<string>;
  setRepositories: (value: Array<string>) => void;

  user: string;
  userChange: (value: string) => void;

  selectedRepo: string;
  setSelectedRepo: (value: string) => void;

  repoContent: Array<GithubRepoContentInterface>;
  setRepoContent: (value: Array<GithubRepoContentInterface>) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [repos, setRepositories] = useState([""]);
  const [user, userChange] = useState("");
  const [selectedRepo, setSelectedRepo] = useState("");
  const [repoContent, setRepoContent] = useState(
    Array<GithubRepoContentInterface>
  );

  return (
    <AppContext.Provider
      value={{
        repos,
        setRepositories,
        user,
        userChange,
        selectedRepo,
        setSelectedRepo,
        repoContent,
        setRepoContent,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

interface GithubRepoContentInterface {
  name: string;
  type: string;
}
