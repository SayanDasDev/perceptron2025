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
  item: { title, description, href, date, time, rules },
  eventNumber
}) => {

  const {font, font_sub} = useFonts();

  return (
    <div className='flex flex-col w-[90dvw] h-[90dvh] border-8 border-green-400 rounded-[2rem] p-8 overflow-clip'>
      <div className={`${font_sub.className} font-size-sm text-green-400`}>PERCEPTRON 2025</div>
      <div className={`${font.className} font-size-xs mt-2 text-slate-400`}>presents</div>
      <div className={`${font_sub.className} font-size-lg mt-4 text-slate-300`}>{title}</div>
      <div className="flex-1 mt-4 grid grid-cols-[auto_2rem]">
        <div className="w-full h-full flex flex-col gap-6 overflow-hidden font-size-xs font-extralight">
          <div className="text-lg leading-5">{description}</div>
          <div className="flex flex-col gap-2">
            {rules.map((rule, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <p>{rule.title}</p>
              </div>
            ))}
          </div>
          <div className='flex flex-col md:flex-row w-3/4 gap-2 items-start md:items-center justify-start'>
            <Button className='text-lg' variant='heroCTA' size='responsiveXL'>Apply</Button>
            <Link href={href} className={buttonVariants({ variant: "ghost", size: "lg", className: "!rounded-full h-14 !text-lg" })}>More details</Link>
          </div>
          <div className="flex-1 flex items-center  gap-2">
            <Gift className="w-6 h-6 ml-2 text-green-400" />
            <p>Win Prizes worth <span className='text-green-400 font-bold'>$ 1M</span></p>
          </div>
          <div className="space-y-2 text-right">
            <p>Event Will be held on</p>
            <div className="flex items-center">
              <div className="flex-1 font-bold">{date}</div>
              <Calendar className="w-4 h-4 ml-2 text-green-400" />
            </div>
            <div className="flex items-center">
              <div className="flex-1 font-bold">{time}</div>
              <Clock className="w-4 h-4 ml-2 text-green-400" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-end w-full h-full text-xs">
          <div className="flex-1 bg-slate-500/50 w-[1px] mr-2"></div>
          <div className={`${font_sub.className} text-right text-slate-500/50`}><span className='text-vertical'>EVENT</span> #{eventNumber}</div>
        </div>
      </div>
    </div>
  )
}

export default EventCard
