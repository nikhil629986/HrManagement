import { daily_goals } from "./IDailygoals";

export interface employeePerformance {
  
    employee_id: string;
    description: string;
    status: string;
    employeerating: string;

    daily_goals:Array<daily_goals>;
   
  }