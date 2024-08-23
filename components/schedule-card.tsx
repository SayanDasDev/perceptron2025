import { ScheduleItem } from "@/types/schedule";
import React from "react";

interface ScheduleCardProps {
  data: ScheduleItem;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({
  data: { title, description, startDate, endDate, startTime, endTime },
}) => {
  return <div>{title}</div>;
};

export default ScheduleCard;
