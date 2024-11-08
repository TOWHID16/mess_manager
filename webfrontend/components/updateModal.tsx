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
import { updateMeal } from "@/utils/meals";

interface DialogWrapperProps {
    children: React.ReactNode;
  }

export const UpdateMealModal : React.FC<DialogWrapperProps> = ({
    children,
  }) => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours() + 6;
  const currentMinutes = currentDate.getMinutes();
  const newDateFormat = formatTimestamp(currentDate.toLocaleString(),'new')
    

    const [selectedMeal, setSelectedMeal] = useState<string>('chicken');
    const [selectLunchCount, setSelectLunchCount] = useState<string>('0');
    const [selectComment, setSelectComment] = useState<string>('no comment');
    const [statusDone, setStatusDone] = useState(false);

    const [showModalType, setShowModalType] = useState<string>('lunch');

  

  const handleMealSelection = (value: string) => {
    setSelectedMeal(value);
  };

  const handLunchCount = (value: string ) => {
    setSelectLunchCount(value);
    console.log(selectLunchCount);
  };

  const handleComment = (value: string ) => {
    setSelectComment(value);
  };

  async function myMealUpdate() {
   

    try {
     
   const str = selectLunchCount;
     const count = parseInt(str);

      // console.log(selectedMeal);
      // console.log(newDateFormat);
      // console.log(count);
      // console.log(selectComment);
      // console.log(showModalType);
      setStatusDone(true);
      const id = getCookie(userid);
    
    const responseValue = await updateMeal(newDateFormat,selectedMeal, count, selectComment,showModalType, id)
       console.log(responseValue);
} catch (error) {
      console.error('Error fetching lunch count:', error);
    }
  }


  const handleButton = async () => {
    await myMealUpdate();
  };



  useEffect(() => {
      if (currentHour > 9 || (currentHour === 9 && currentMinutes > 0)) {
        setShowModalType('lunch');
      } else {
        setShowModalType('dinner');
      }
     
  }, []);
  


  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Update Meal</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{showModalType==='lunch' && <div className='text-white'>Update Lunch Meal</div>}
          {showModalType==='dinner' && <div className='text-white'>Update Dinner Meal</div>}
          </DialogTitle>
          <DialogDescription>
      
           You cant update your lunch meal from previous day's 6.30pm to today's 11am.
           And your dinner meal from today's 11am to today's 6.30pm. <br/>
          You are updating at {currentHour}: {currentMinutes}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="lunch" className="text-right">
            {showModalType==='lunch' && <div className='text-white'>Lunch</div>}
          {showModalType==='dinner' && <div className='text-white'>Dinner</div>}
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
