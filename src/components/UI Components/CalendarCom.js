import React, {useEffect, useState} from 'react';
import { format, isSameDay, isSameMonth, addDays, isToday } from 'date-fns';
import {takeMonth, startOfMonth} from '../module/CalendarMod';
import Button from './Buttons/Button';
import styles from './CalendarCom.module.css';





const CalendarMod = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const data = takeMonth(selectedDate)();

    console.log(selectedDate);
    

    function WeekNames() {
        return( 
            <div className={`grid grid-cols-7`}>
                {
                    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((dayName, i) =>
                    <div className={`h-14 w-14 flex items-center justify-center dayNameHeader ${styles.dayCon}`}>{dayName}</div>)
                }
            </div>
        )
    }

    // Changes colors of the day on the calendar if it is not the same month as the current month or the selected month
    function dayColor(day) {
        if(!isSameMonth(day, selectedDate)) return "text-gray-500";
        if(isSameDay(day, selectedDate)) return `${styles.selected}`;
        if(isToday(day, selectedDate)) return `${styles.thisDay}`;
        if(selectedDate === isToday) return `${styles.today}`;
    }

    function Months(){
        const month = selectedDate;
        return(
            <div className={styles.month}>{format(month, 'MMMM').toUpperCase()}</div>
        )
    }
    
    function Year(){
        const year = selectedDate;
        return(
            <div className={styles.year}>{format(year, 'yyyy').toUpperCase()}</div>
        )
    }

    function prevMonth(){
        const addTheDays = addDays(selectedDate, -30);
        const month =  (format(addTheDays, 'MMMM'));
        console.log(month);
        setSelectedDate(addTheDays);
    }

    function nextMonth(){
        const addTheDays = addDays(selectedDate, 30);
        const month =  (format(addTheDays, 'MMMM'));
        setSelectedDate(addTheDays);
    }

    return (
        
       <div className={`${styles.calendar}`}>
           
            <div className={`rounded-xl ${styles.roundedXl}`}>
                <Year/>
                <div className={styles.monthHeadingGroup}>
                    {/* <div className={styles.monthYear}> */}
                    
                    <Months/>
                    
                    {/* </div> */}
                    <div className={styles.buttons}>
                    <Button className={styles.nextPrev} onClick={() => prevMonth(true)} name="&#9666;"/>
                    <Button className={styles.nextPrev}  onClick={() => nextMonth(true)} name="&#9656;"/>
                    </div>

                </div>


                <WeekNames />
                {
                    data.map((week , wi)=> <div className={`grid grid-cols-7`}>
                        {
                            week.map((day, di) => 
                            <div onClick={() => setSelectedDate(day)} className={`h-14 w-14 flex items-center justify-center ${styles.days} ${dayColor(day)}`}>
                                    {format(day, 'dd')}
                                    {/* <div className={styles.notificationDot}>
                                        <div className={styles.hasAppointment}></div>
                                        <div className={styles.hasAppointment}></div>
                                    </div> */}
                            </div>)
                        }
                    </div>)
                }

            </div>
        </div>
    );
};

export default CalendarMod;