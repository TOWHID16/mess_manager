"use client";
import React, { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { userid } from "@/utils/cookiesNames";
import { getCookie } from "@/utils/cookiesFunction";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import formatTimestamp from "@/lib/formatTimestamp";
import { getAllDate, updateMeal } from "@/utils/meals";

interface DialogWrapperProps {
    children: React.ReactNode;
  }

export const ManagerMealUpdateModal: React.FC<DialogWrapperProps> = ({
    children,
  }) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(),'new')
    

    const [selectedMeal, setSelectedMeal] = useState<string>('chicken');
    const [selectMember, setSelectMember] = useState<string>('sharif');
    const [selectedDate, setSelectedDate] = useState<string>('2024-05-01');
    const [selectLunchCount, setSelectLunchCount] = useState<string>('0');
    const [allDateString, setAllDateString] = useState<string[]>([]);
    const [selectComment, setSelectComment] = useState<string>('');
    const [statusDone, setStatusDone] = useState(false);

    const [showModalType, setShowModalType] = useState<string>('lunch');


  async function myMealUpdate() {
   

    try {
     
   const str = selectLunchCount;
     const count = parseInt(str);
    
     const responseValue = await updateMeal(newDateFormat,selectedMeal, count, selectComment,showModalType, selectMember)
    //    console.log(responseValue);
} catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }

  const handleButton = async () => {
    
    await myMealUpdate();
   };

  async function getDates() {
   

    try {
     
    const responseValue = await getAllDate();
    setAllDateString(responseValue);
    console.log(responseValue);
    //    console.log(responseValue);
} catch (error) {
      console.error('Error fetching date:', error);
    }
  }


  useEffect(() => {
     getDates();
  }, []);
  


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update Meal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle> <div className='text-white'>Update Any Meal</div>
         
          </DialogTitle>
          <DialogDescription>
          Date format is: year- month - date

          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lunch" className="text-right">
             Members
            </Label>
            <Select value={selectMember} onValueChange={(e) => setSelectMember(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Member List</SelectLabel>
                  <SelectItem value="9">Towhid</SelectItem>
                  <SelectItem value="10">Zahid</SelectItem>
                  <SelectItem value="11">Yasin</SelectItem>
                  <SelectItem value="12">Sharif</SelectItem>
                  <SelectItem value="13">Tamjid</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>


          <div className="grid grid-cols-4 items-center gap-4">
  <Label htmlFor="date" className="text-right">
    Date
  </Label>
  <Select value={selectedDate} onValueChange={(e) => setSelectedDate(e)}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select a Date" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Available Dates</SelectLabel>
        {allDateString.map((date, index) => (
          <SelectItem key={index} value={date}>
            {date}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
</div>

<div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lunch" className="text-right">
             Meal Type
            </Label>
            <Select value={showModalType} onValueChange={(e) => setShowModalType(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Member" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Member List</SelectLabel>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        


        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lunch" className="text-right">
           Meal Name
            </Label>
            <Select value={selectedMeal} onValueChange={(e) => setSelectedMeal(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Meal" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Meal List</SelectLabel>
                  <SelectItem value="chicken">Chicken</SelectItem>
                  <SelectItem value="fish">Fish</SelectItem>
                  <SelectItem value="rice">Rice</SelectItem>
                  <SelectItem value="off">Off</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lunch" className="text-right">
             Amount
            </Label>
            <Select value={selectLunchCount} onValueChange={(e) => setSelectLunchCount(e)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a Meal" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Meal Count</SelectLabel>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          
           
          
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="comment" className="text-right">
              Comment
            </Label>
            <Input
              id="comment"
              className="col-span-3"
              type="text"
              name="comment" value={selectComment} onChange={(e) => setSelectComment(e.target.value)}
            />
          </div>
        </div>
        <DialogFooter>
        <DialogClose asChild>
          <Button type="submit"
          onClick={handleButton} 
          >Save changes</Button>
          </DialogClose>
          
          {/* {statusDone && <div className='text-white'>Your meal is updated successfully ✅</div>} */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
