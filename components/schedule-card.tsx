import { ScheduleItem } from "@/types/schedule";
import React from "react";
import { Badge } from "./ui/badge";
import { Clock, MapPin } from "lucide-react";

interface ScheduleCardProps {
  data: ScheduleItem;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  data: { title, description, start, end, status, venue },
}) => {
  return (
    <div className="h-full font-size-sm flex flex-col">
      <div className="h-fit w-fit flex flex-col p-4 gap-2 text-center bg-green-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-green-400">
        <p className="font-size-sm font-bold">{start.toLocaleDateString("en-US", {
          day: "numeric"
        })}</p>
        <p className="font-size-xs">{start.toLocaleDateString("en-US", {
          month: "short"
        })}</p>
      </div>
      <div className="flex-1"></div>
      <div className="flex flex-col gap-4 ">
        <Badge variant={status} className="w-fit">{status}</Badge>
        <div className="flex gap-2 items-center">
          <MapPin size={24} className="text-primary" />
          <p>{venue}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Clock size={24} className="text-primary" />
          <p>{start.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          })} {end && end.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true
          }).replace(/^/, '- ')}</p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCard;
