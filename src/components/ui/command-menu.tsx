"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { 
  User, 
  Code, 
  Briefcase, 
  Mail, 
  GitBranch, 
  Link, 
  Award,
  Terminal
} from "lucide-react";

export function CommandMenu() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            <CommandItem onSelect={() => runCommand(() => router.push("/#about"))}>
              <User className="mr-2 h-4 w-4" />
              <span>About</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#skills"))}>
              <Terminal className="mr-2 h-4 w-4" />
              <span>Skills</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#projects"))}>
              <Code className="mr-2 h-4 w-4" />
              <span>Projects</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => router.push("/#experience"))}>
              <Briefcase className="mr-2 h-4 w-4" />
              <span>Experience</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Socials">
            <CommandItem onSelect={() => runCommand(() => window.open("https://github.com/GGuruPrasad2004", "_blank"))}>
              <GitBranch className="mr-2 h-4 w-4" />
              <span>GitHub</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com/in/guru-prasad-5b82872b3", "_blank"))}>
              <Link className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => window.location.href = "mailto:gguruprasad2004@gmail.com")}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Email</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
