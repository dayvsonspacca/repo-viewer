import { ScrollArea } from "@/components/ui/scroll-area";
import RepoViewHeader from "@/components/client/repo-view-header";
import RepoViewContent from "@/components/client/repo-view-content";

export default function RepoView() {
  return (
    <div className="w-4/5 m-10 rounded-sm shadow-sm dark:shadow-foreground transition-all border-2">
      <RepoViewHeader />
      <ScrollArea className="h-96">
        <RepoViewContent />
      </ScrollArea>
    </div>
  );
}
