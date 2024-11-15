import React from "react";
import { Badge } from "./ui/badge";
import { Clock, Github, Globe, Linkedin, MapPin } from "lucide-react";
import { TeamItem } from "@/types/team";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface TeamCardProps {
  data: TeamItem;
}

const TeamCard: React.FC<TeamCardProps> = ({
  data: { name, avatar, role, github, linkedIn, website },
}) => {
  return (
    <div className="h-full font-size-sm flex flex-col">
      <Avatar className="rounded-none absolute h-full w-full inset-0 z-[-10]">
        <AvatarImage className="brightness-[40%]" src={avatar} />
        <AvatarFallback className="bg-transparent"></AvatarFallback>
      </Avatar>

      {/* <div className="h-fit w-fit flex flex-col p-4 gap-2 text-center bg-primary/20 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm border-green-400">
        <p className="font-size-sm font-bold">{role}</p>
      </div> */}
      <div className="flex-1"></div>
      <div className="grid grid-cols-3 gap-4">
        {github && (
          <Link className={cn(buttonVariants({ variant: "avatarLinks" }))} href={github}>
            <Github size={16} />
            Github
          </Link>
        )}
        {linkedIn && (
          <Link
            className={cn(buttonVariants({ variant: "avatarLinks" }))}
            href={linkedIn}
          >
            <Linkedin size={16} />
            LinkedIn
          </Link>
        )}
        {website && (
          <Link className={cn(buttonVariants({ variant: "avatarLinks" }))} href={website}>
            <Globe size={16} />
            Website
          </Link>
        )}
      </div>
    </div>
  );
};

export default TeamCard;
