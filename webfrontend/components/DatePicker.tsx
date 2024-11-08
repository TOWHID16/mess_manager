"use client"

import React, { useState, useEffect } from "react";
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface ChildProps {
   
    setDatingFrom: React.Dispatch<React.SetStateAction<string>>;
    setDatingTo: React.Dispatch<React.SetStateAction<string>>;
    fromTo: string;
}

const DatePicker: React.FC<ChildProps> = ({ setDatingFrom, setDatingTo, fromTo }) => {
    const [date, setDate] = React.useState<Date>();
    const [dateStringify, setDateStringify] = React.useState<String>('');
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDatingFrom(event.target.value);
    // };
    // const handleChangeTo = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setDatingTo(event.target.value);
    // };
 

    function dateFormatFunc(newDate: string): string {
        const dateFormas = new Date(newDate);
        const year = dateFormas.getFullYear();
        const month = String(dateFormas.getMonth() + 1).padStart(2, '0'); // Month is zero-based
        const day = String(dateFormas.getDate()).padStart(2, '0');
    
        // Step 3: Format the Date
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    };

  useEffect(() => {
   console.log(date);

   const dateString = date?.toISOString() || '';
   const formattedDate = dateFormatFunc(dateString);
   if(fromTo=='from'){
    setDatingFrom(formattedDate);
   }
   else{
    setDatingTo(formattedDate);
   }
   console.log(formattedDate);

   
}, [date]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DatePicker;
