import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}){
   const [isDark , setIsDark] =useState(false);
   const mockFuelData = [
     {
       id: "1",
       name: "Regular Unleaded",
       pricePerLiter: 2.99,
       currentStock: 15000,
       minimumStock: 5000,
     },
     {
       id: "2",
       name: "Premium Unleaded",
       pricePerLiter: 3.49,
       currentStock: 8000,
       minimumStock: 3000,
     },
     {
       id: "3",
       name: "Diesel",
       pricePerLiter: 2.79,
       currentStock: 12000,
       minimumStock: 4000,
     },
   ];
   const salesData = [
     { day: "Monday", sales: 1200 },
     { day: "Tuesday", sales: 1500 },
     { day: "Wednesday", sales: 1100 },
     { day: "Thursday", sales: 1700 },
     { day: "Friday", sales: 1900 },
     { day: "Saturday", sales: 2400 },
     { day: "Sunday", sales: 2200 },
   ];

   const mockEmployees = [
     { id: "1", name: "John Doe", role: "manager", shift: "Morning" },
     { id: "2", name: "Jane Smith", role: "Attendant", shift: "Evening" },
     { id: "3", name: "Mike Johnson", role: "Attendant", shift: "Night" },
     { id: "4", name: "Sarah Wilson", role: "Attendant", shift: "Morning" },
     { id: "5", name: "David Clark", role: "Cashier", shift: "Evening" },
     { id: "6", name: "Emily Davis", role: "manager", shift: "Night" },
     { id: "7", name: "James Anderson", role: "Cleaner", shift: "Morning" },
     { id: "8", name: "Olivia Brown", role: "Attendant", shift: "Evening" },
     { id: "9", name: "Liam Garcia", role: "Technician", shift: "Night" },
     { id: "10", name: "Sophia Martinez", role: "Cashier", shift: "Morning" },
   ];



   return (
      <AppContext.Provider value={{isDark, setIsDark, mockFuelData , salesData, mockEmployees}}>
         {children}
      </AppContext.Provider>
   )


}