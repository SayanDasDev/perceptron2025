import useFonts from '@/hooks/useFonts';
import { Calendar, CheckCheckIcon, CheckCircle, Clock, Gift } from 'lucide-react';
import React from 'react'
import { Button, buttonVariants } from './ui/button';
import { EventItem } from '@/types/events';
import Link from 'next/link';

interface EventCardProps {
  item: EventItem;
  eventNumber: number;
}

const EventCard: React.FC<EventCardProps> = ({
  item: { title, description, href, date, time, rules, prize: { first: prize } },
  eventNumber
}) => {

  const {handwriting, sub, mono} = useFonts();

  return (
    <div className='flex flex-col w-[90dvw] h-[90dvh] border-8 border-primary rounded-[2rem] p-8 overflow-clip event-card-shadow'>
      <div className="md:flex md:gap-4">
        <div className={`${sub.className} font-size-sm text-primary`}>PERCEPTRON 2025</div>
        <div className={`${handwriting.className} text-2xl leading-3 mt-2 font-light text-slate-400/50`}>presents</div>
      </div>
      <div className={`${mono.className} uppercase font-size-lg mt-4 text-slate-300`}>{title}</div>
      <div className="flex-1 mt-4 grid grid-cols-[auto_2rem]">
        <div className="w-full h-full flex flex-col gap-6 overflow-hidden font-size-xs font-extralight">
          <div className="leading-5 text-lg font-normal text-slate-400">{description}</div>
          <div className="flex flex-col gap-2">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-primary" />
                <p>{rule.title}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-col md:flex-row w-3/4 gap-2 items-start md:items-center justify-start'>
            <Button className='text-lg w-[168px]' variant='heroCTA' size='responsiveXL'>Apply</Button>
            <Link href={href} className={buttonVariants({ variant: "ghost", size: "lg", className: "!rounded-full h-14 !text-lg" })}>More details</Link>
          </div>
          <div className="flex-1 flex items-center  gap-2">
            <Gift className="w-6 h-6 ml-2 text-primary" />
            <p>Win Prizes worth <span className='text-primary font-bold'>{prize}</span></p>
          </div>
          <div className="space-y-2 text-right">
            <p>Event Will be held on</p>
            <div className="flex items-center">
              <div className="flex-1 font-bold">{date}</div>
              <Calendar className="w-4 h-4 ml-2 text-primary" />
            </div>
            <div className="flex items-center">
              <div className="flex-1 font-bold">{time}</div>
              <Clock className="w-4 h-4 ml-2 text-primary" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1 items-end w-full h-full text-xs">
          <div className="h-1 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className="h-1 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className="h-1 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className="flex-1 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className={`${sub.className} py-5 text-right text-slate-400/80`}><span className='text-vertical text-slate-500/50'>EVENT</span> #{eventNumber}</div>
          <div className="h-10 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className="h-5 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className="h-5 bg-slate-500/50 w-[1px] mr-2"></div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
