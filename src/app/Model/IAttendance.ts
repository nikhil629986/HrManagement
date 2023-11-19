import { clockin } from "./IClockin";
import { LeaveRequest } from "./ILeavereq";

export interface Employeeattendance {
  id: string;
  usertableid: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  department: string;
  dateofhire: string;
  attendance:Array<clockin>;
  leaveRequests:Array<LeaveRequest>;
   
 
}
