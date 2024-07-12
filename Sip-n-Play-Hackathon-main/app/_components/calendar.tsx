"use client";

import React, { useEffect, useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { type Date } from "../events/page";
import { cn } from "./lib/utils";
import { Button } from "./ui/button";

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Calendar = ({
  calendar,
  setCalendar,
  selected,
  setSelected,
  eventDates,
}: {
  selected: Date;
  setSelected: React.Dispatch<React.SetStateAction<Date>>;
  calendar: Date;
  setCalendar: React.Dispatch<React.SetStateAction<Date>>;
  eventDates: Date[];
}) => {
  const [rows, setRows] = useState<React.ReactNode[][]>([]);
  useEffect(() => {
    const firstDay = new Date(calendar.year, calendar.month).getDay();
    const daysInMonth = new Date(
      calendar.year,
      calendar.month + 1,
      0
    ).getDate();

    const tempRows = [];

    let row = 0;

    for (let i = 0; i < firstDay; i++) {
      if (!tempRows[row]) tempRows[row] = [];
      tempRows[row].push(<CalendarCell />);
    }

    for (let i = 1; i <= daysInMonth; i++) {
      if (!tempRows[row]) tempRows[row] = [];
      tempRows[row].push(
        <CalendarCell
          text={i + ""}
          selected={
            i == selected.day &&
            calendar.month == selected.month &&
            calendar.year == selected.year
          }
          onClick={() => setSelected({ ...calendar, day: i })}
          event={
            eventDates.findIndex(
              (v) =>
                i == v.day &&
                calendar.month == v.month &&
                calendar.year == v.year
            ) >= 0
          }
        />
      );
      if ((i + firstDay) % 7 == 0) {
        row++;
      }
    }

    let i = tempRows[row]?.length || 0;
    while (i % 7 != 0) {
      tempRows[row].push(<CalendarCell />);
      i++;
    }

    setRows(tempRows);
  }, [calendar, selected, eventDates]);

  function changeMonth(offset: number) {
    setCalendar(({ day, month, year }) => {
      let newMonth = Math.abs(month + offset) % 12;
      let newYear = year;
      if (month + offset > 11) {
        newYear++;
      } else if (month + offset < 0) {
        newYear--;
        newMonth = 12 - newMonth;
      }
      return { day, month: newMonth, year: newYear };
    });
    setSelected({ day: -1, month: -1, year: -1 });
  }

  return (
    <div className="w-min">
      <div className="flex items-center justify-between">
        <NavigationButton onClick={() => changeMonth(-1)}>
          <ChevronLeft className="w-[1.15em] h-[1.15em] text-primary" />
        </NavigationButton>
        <p className="select-none">
          {monthNames[calendar.month]} {calendar.year}
        </p>
        <NavigationButton onClick={() => changeMonth(1)}>
          <ChevronRight className="w-[1.15em] h-[1.15em] text-primary" />
        </NavigationButton>
      </div>
      <CalendarRow
        cells={dayNames.map((name) => (
          <CalendarCell
            text={name.substring(0, 3)}
            className="text-primary"
            key={name}
            hover={false}
          />
        ))}
      />
      {rows.map((row, i) => (
        <CalendarRow cells={row} key={i} />
      ))}
    </div>
  );
};

function NavigationButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Button
      className="aspect-square p-0 rounded-full"
      variant="ghost"
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

function CalendarRow({
  cells,
  className = "",
}: {
  cells: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={`flex ${cn(className)}`}>
      {cells.map((cell, i) => (
        <React.Fragment key={i}>{cell}</React.Fragment>
      ))}
    </div>
  );
}

function CalendarCell({
  text = "",
  className = "",
  hover = true,
  onClick = () => {},
  selected = false,
  event = false,
}) {
  return (
    <div
      className={`p-2 ${cn(
        className
      )} text-xs w-10 h-10 flex justify-center items-center select-none rounded-lg ${
        text != "" && hover && !selected && "hover:bg-border cursor-pointer"
      } ${selected && `bg-primary text-accent`} flex-col gap-1`}
      onClick={onClick}
    >
      {text}
      {event && (
        <span
          className={`bg-primary ${
            selected && `bg-accent-foreground`
          } w-1 aspect-square rounded-full`}
        ></span>
      )}
    </div>
  );
}

export default Calendar;
