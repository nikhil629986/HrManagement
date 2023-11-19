import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{userlogin} from"../Model/Ilogin";
import { BehaviorSubject, Observable } from 'rxjs';
import { Employeeattendance } from '../Model/IAttendance';
import { employeePerformance } from '../Model/IPerformance';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
myemail= new BehaviorSubject<string>('');
  getAllUsers(): Observable<userlogin[]>
{
  return this.http.get<userlogin[]>(`https://localhost:7135/api/User`);
}

getusersWithId(userid: string): Observable<userlogin[]>
{
  return this.http.get<userlogin[]>(`https://localhost:7135/api/User/${userid} `)
}

getAllAttendance(): Observable<Employeeattendance[]>
{
 return this.http.get<Employeeattendance[]>(`https://localhost:7135/api/Attendance`)

}



updateattendance(attendance: Employeeattendance) {
  const apiUrl = `https://localhost:7135/api/Attendance/${attendance.id}`;
  return this.http.put(apiUrl, attendance);
}

updateperformace(performace:any)
  {
    const apiUrl = `https://localhost:7135/api/Performance/${performace.id}`;
 
    return this.http.put(apiUrl, performace);
  }

getattendanceWithId(userid: string): Observable<Employeeattendance[]>
{
  return this.http.get<Employeeattendance[]>(`https://localhost:7135/api/Attendance/${userid} `)
}

deleteUser(userId: string): Observable<userlogin[]>{
  return this.http.delete<userlogin[]>(`https://localhost:7135/api/user/${userId}`);
}

deleteEmployee(userId: string): Observable<Employeeattendance[]>{
  return this.http.delete<Employeeattendance[]>(`https://localhost:7135/api/Attendance/${userId}`);
}

fetchallperformancewithid(id:string)
{
  return this.http.get(`https://localhost:7135/${id}`)
}

fetchallperformance()
{
  return this.http.get(`https://localhost:7135/api/Performance`)
}

getemail(email: string){
localStorage.setItem('email', email);
}
getmyemail()
{
  return localStorage.getItem('email');
}}



