import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian"; 
import persian_fa from "react-date-object/locales/persian_fa"; 

export default function PersianDate() {
  const [date, setDate] = useState();

  return (
    <div className="flex flex-row items-center mt-3.5 relative -translate-y-3">
      <DatePicker
        value={date}
        onChange={setDate}
        calendar={persian} 
        locale={persian_fa} 
        minDate={new Date()}
        calendarPosition="bottom-center"
        className="custom-calendar"
        render={(value, openCalendar) => (
          <input
            type="text"
            value={value}
            onChange={(e) => setDate(e.target.value)}
            onFocus={openCalendar}
            placeholder="تاریخ"
            className="mt-[-10px] pr-7 border-r border-r-black/15 m-1.5 h-[51px] w-[205px] outline-none bottom-[20px]"
            
          />
        )}
      />
    </div>
  );
}
