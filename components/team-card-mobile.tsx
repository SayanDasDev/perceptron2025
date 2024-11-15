import { TeamItem } from "@/types/team";
import React from "react";
import { Badge } from "./ui/badge";
import { Clock, MapPin } from "lucide-react";
import useFonts from "@/hooks/useFonts";

interface TeamCardProps {
  data: TeamItem;
}

const TeamCardMobile: React.FC<TeamCardProps> = ({
  data: { name, avatar, role, github, linkedIn, website },
}) => {

  const { mono, font } = useFonts();

  return (
    <div className={`${font.className} sm:hidden flex flex-col gap-4 items-start my-4`}>
      <div className="flex gap-1 items-end">
        <div className="h-fit w-fit flex py-3 px-4 gap-2 text-center bg-green-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-green-400">
          <p className="font-size-sm font-bold">
            {website}
          </p>
          <p className="font-size-xs">
            {linkedIn}
          </p>
        </div>
        <Badge variant={"outline"} className="w-fit py-1 h-6">
          {role}
        </Badge>
      </div>
      <p className="sm:hidden">{name}</p>
      <div className="flex flex-col gap-2 font-size-sm text-slate-500">
        <div className="flex gap-2 items-center">
          <MapPin size={16} className="text-primary" />
          <p>{role}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Clock size={16} className="text-primary" />
          <p>
            {github}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCardMobile;
