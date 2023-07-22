import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TableCell, TableRow } from "@/components/ui/table";
import { MagnifyingGlassIcon, PlusIcon } from "@radix-ui/react-icons";
import { BiFileBlank, BiSolidFolder, BiSolidPencil, BiSolidTrashAlt } from "react-icons/bi";

export default function Home() {
  const files = [
    {
      fileName: "src",
      fileType: "folder",
    },
    {
      fileName: "public",
      fileType: "folder",
    },
    {
      fileName: ".eslintrc.json",
      fileType: "file",
    },
    {
      fileName: ".gitignore",
      fileType: "file",
    },
    {
      fileName: "LICENSE",
      fileType: "file",
    },
    {
      fileName: "README.md",
      fileType: "file",
    },
    {
      fileName: "next.config.js",
      fileType: "file",
    },
    {
      fileName: "package-lock.json",
      fileType: "file",
    },
    {
      fileName: "package.json",
      fileType: "file",
    },
    {
      fileName: "postcss.config.js",
      fileType: "file",
    },
    {
      fileName: "tailwind.config.js",
      fileType: "file",
    },
    {
      fileName: "tsconfig.json",
      fileType: "file",
    },
  ];

  return (
    <main className="bg-slate-50 w-screen h-screen flex items-center justify-center flex-col">
      <div className="w-4/5 flex justify-between m-5">
        <div className="flex max-w-sm items-center gap-3">
          <Input type="text" className="h-9" placeholder="Buscar arquivo.." />
          <Button size="sm">
            <MagnifyingGlassIcon className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-3 flex-row-reverse">
          <Button size="sm">
            <PlusIcon className="h-4 w-4 mr-3" /> Adicionar
          </Button>
          <Select>
            <SelectTrigger className="w-[180px] h-9 bg-white">
              <SelectValue placeholder="Tipo de arquivo..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="file">Arquivo</SelectItem>
              <SelectItem value="folder">Pasta</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Card className="w-4/5">
        <CardHeader className="h-9 bg-secondary flex items-center flex-row gap-2">
          <Avatar className="w-8 h-8">
            <AvatarImage
              src="https://github.com/dayvsonspacca.png"
              alt="@dayvsonspacca"
            />
            <AvatarFallback>DS</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="p-0">
          <ScrollArea className="h-96">
            {files.map((file, key) => {
              return (
                <TableRow key={key}>
                  <TableCell className="flex gap-3 items-center">
                    {file.fileType === "folder" ? (
                      <BiSolidFolder size={20} className="text-slate-600" />
                    ) : (
                      <BiFileBlank size={20} className="text-slate-600" />
                    )}
                    {file.fileName}
                  </TableCell>
                  <TableCell className="text-right space-x-2 p-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <BiSolidTrashAlt size={16} className="text-slate-600" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <BiSolidPencil size={16} className="text-slate-600" />
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </ScrollArea>
        </CardContent>
      </Card>
    </main>
  );
}
