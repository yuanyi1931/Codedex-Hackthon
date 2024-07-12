"use client";

import { CircleOff, MousePointerClick } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Calendar, { dayNames, monthNames } from "../_components/calendar";
import Heading from "../_components/heading";
import { Button } from "../_components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../_components/ui/card";

export type Date = {
  day: number;
  month: number;
  year: number;
};

export type Event = {
  name: string;
  description: string;
  date: Date;
};

const weeklyEvents: (Omit<Event, "date"> & {
  day: number;
})[] = [
  {
    name: "Board Game Brunch",
    description: "Enjoy board games over brunch",
    day: 7,
  },
  {
    name: "Strategy Sundays",
    description: "Dive into strategic board games",
    day: 1,
  },
  {
    name: "Family Game Night",
    description: "Games for the whole family",
    day: 5,
  },
];

const nonRecurringEvents: Event[] = [
  {
    name: "Game Night: Party Games",
    description: "Join us for a night of laughter and party board games!",
    date: { day: 25, month: 8, year: 2024 },
  },
  {
    name: "Chess Tournament",
    description: "Compete in our chess tournament and claim victory!",
    date: { day: 10, month: 9, year: 2024 },
  },
  {
    name: "Card Game Social",
    description: "Meet new people and play a variety of card games!",
    date: { day: 18, month: 9, year: 2024 },
  },
];

function calculateWeeklyEventDates(date: Date) {
  const eventDates: Event[] = [];

  weeklyEvents.forEach((event) => {
    const { day } = event;

    let currentDate = new Date(date.year, date.month, 1);
    while (
      currentDate.getMonth() === date.month &&
      currentDate.getFullYear() == date.year
    ) {
      if (currentDate.getDay() === day) {
        eventDates.push({
          ...event,
          date: {
            ...date,
            day: currentDate.getDate(),
          },
        });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
  });

  return eventDates;
}

const Event = () => {
  const [calendarDate, setCalendarDate] = useState<Date>({
    day: -1,
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const [selectedDate, setSelectedDate] = useState<Date>({
    day: -1,
    month: -1,
    year: -1,
  });

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    if (calendarDate.month !== -1 && calendarDate.year !== -1) {
      const datedWeeklyEvents = calculateWeeklyEventDates(calendarDate);
      setEvents(nonRecurringEvents.concat(datedWeeklyEvents || []));
    }
  }, [calendarDate]);

  return (
    <div className="mx-auto w-3/4 mt-4">
      <Heading name="Events" />
      <div className="flex gap-4">
        <Calendar
          selected={selectedDate}
          setSelected={setSelectedDate}
          calendar={calendarDate}
          setCalendar={setCalendarDate}
          eventDates={events.map(({ date }) => date)}
        />
        <div className="w-full">
          <div className="flex flex-col gap-3">
            {selectedDate.day != -1 ? (
              events.filter(
                (event) =>
                  event.date.day === selectedDate.day &&
                  event.date.month === selectedDate.month &&
                  event.date.month === calendarDate.month &&
                  event.date.year === selectedDate.year &&
                  event.date.year === calendarDate.year
              ).length > 0 ? (
                events
                  .filter(
                    (event) =>
                      event.date.day === selectedDate.day &&
                      event.date.month === selectedDate.month &&
                      event.date.month === calendarDate.month &&
                      event.date.year === selectedDate.year &&
                      event.date.year === calendarDate.year
                  )
                  .map((event, i) => {
                    return (
                      <EventCard
                        key={i}
                        name={event.name}
                        description={event.description}
                        date={event.date}
                      />
                    );
                  })
              ) : (
                <div className="text-muted-foreground text-5xl m-10 flex flex-row items-center gap-4">
                  <CircleOff className="w-[1em] h-[1em]" />
                  <p className="flex gap-3">
                    <span className="text-destructive/80 flex items-center gap-4">
                      No events
                    </span>{" "}
                    on the selected date
                  </p>
                </div>
              )
            ) : (
              <div className="flex text-muted-foreground text-5xl gap-4 m-10 items-center">
                <MousePointerClick className="w-[1.25em] h-[1.25em]" />
                <p className="flex gap-3">
                  Select a <span className="text-primary/80">date</span> to view
                  our events
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

function EventCard({
  name,
  description,
  date: { day, month, year },
}: {
  name: string;
  description: string;
  date: Date;
}) {
  return (
    <Card className="rounded-md">
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="space-y-2">
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className="space-x-1">
          <span>{dayNames[day % 7]},</span>
          <span>{monthNames[month]}</span>
          <span>{day},</span>
          <span>{year}</span>
        </div>
      </CardHeader>
      <CardContent>
        <Button asChild>
          <Link href="https://www.exploretock.com/sipnplay/">
            Reserve Now!!
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default Event;
