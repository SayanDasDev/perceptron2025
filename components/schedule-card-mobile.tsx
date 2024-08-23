import { ScheduleItem } from "@/types/schedule";
import React from "react";
import { Badge } from "./ui/badge";
import { Clock, MapPin } from "lucide-react";
import useFonts from "@/hooks/useFonts";

interface ScheduleCardProps {
  data: ScheduleItem;
}

const ScheduleCardMobile: React.FC<ScheduleCardProps> = ({
  data: { title, description, start, end, status, venue },
}) => {

  const { mono, font } = useFonts();

  return (
    <div className={`${font.className} sm:hidden flex flex-col gap-4 items-start my-4`}>
      <div className="flex gap-1 items-end">
        <div className="h-fit w-fit flex py-3 px-4 gap-2 text-center bg-green-400 rounded-2xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-green-400">
          <p className="font-size-sm font-bold">
            {start.toLocaleDateString("en-US", {
              day: "numeric",
            })}
          </p>
          <p className="font-size-xs">
            {start.toLocaleDateString("en-US", {
              month: "short",
            })}
          </p>
        </div>
        <Badge variant={status} className="w-fit py-1 h-6">
          {status}
        </Badge>
      </div>
      <p className="sm:hidden">{title}</p>
      <div className="flex flex-col gap-2 font-size-sm text-slate-500">
        <div className="flex gap-2 items-center">
          <MapPin size={16} className="text-primary" />
          <p>{venue}</p>
        </div>
        <div className="flex gap-2 items-center">
          <Clock size={16} className="text-primary" />
          <p>
            {start.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}{" "}
            {end &&
              end
                .toLocaleTimeString("en-US", {
                  hour: "numeric",
                  minute: "numeric",
                  hour12: true,
                })
                .replace(/^/, "- ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCardMobile;
