export interface ScheduleItem {
  title: string;
  description?: string;
  start: Date;
  venue: string;
  end?: Date;
  status: 'upcoming' | 'ongoing' | 'closed';
}