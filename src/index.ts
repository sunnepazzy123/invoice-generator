// Import the library into your project
const easyinvoice = require("easyinvoice");
const calendar = require("calendar-js");
import fs = require("fs");
import { invoice } from "./data";


const createInvoice = async () => {
   // Generate the invoice
  const invoiceData = await easyinvoice.createInvoice(invoice);
  fs.writeFileSync("invoice.pdf", invoiceData.pdf, "base64");

  console.log('PDF done successfully.');
};

createInvoice()

interface ICalendar {
  year: string,
  yearAbbr: string,
  month: string,
  weekdays: string[],
  weekdaysAbbr: string[],
  days: number,
  firstWeekday: number,
  lastWeekday: number,
  calendar: IMonthDays;
}

type IWorkingDays = number[];

type IMonthDays = number[][];

interface IWeeklyHoursTotal {
    [key: string]: { weeklyHours: number, weeklyWages: number },
}

const monthlyInvoiceDetails = (holidays?: IWorkingDays, month?: number) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const dailyWorkingHours = 8;
  const wagesPerHour = 125;
  const dailyWages = wagesPerHour * dailyWorkingHours;

  let kalendar: ICalendar;

  if(month && month <= 11 && month >= 0) {
    kalendar = calendar().of(currentYear, month);
  }else{
    kalendar = calendar().of(currentYear, currentMonth);
  }

    const monthDays = kalendar.calendar;
    const weeklyHoursTotal: IWeeklyHoursTotal = {};

    let weeklyWorkingDays: number[][] = [];
    let totalMonthlyHours = 0;

    for (const key in monthDays) {
      const filteredPerWeek = monthDays[key].slice(1, -1); // filter sunday && saturrday

      const workingDaysPerWeek = filteredPerWeek.filter((day) => {

        if(holidays && holidays.length > 0) {
            if(day !== 0 && !holidays.includes(day)) {
                return day
            }
        }else {
            if(day !== 0) {
                return day
            }
        }

      });

      weeklyWorkingDays.push(workingDaysPerWeek);

      const weeklyHours = weeklyWorkingDays[key].length * dailyWorkingHours;
      totalMonthlyHours = totalMonthlyHours + weeklyHours;
      const weekIndex = +key + 1;
      const weeklyWages = weeklyHours * wagesPerHour
      weeklyHoursTotal['week'+ weekIndex] = {weeklyHours, weeklyWages};
    }

    const monthlyWages = wagesPerHour * totalMonthlyHours;
    console.log("monthly invoice detail estimated")

    return {...kalendar, weeklyWorkingDays, weeklyHoursTotal, totalMonthlyHours, dailyWages, monthlyWages}

};

const monthlyInvoiceDetail = monthlyInvoiceDetails();
console.log(monthlyInvoiceDetail)
