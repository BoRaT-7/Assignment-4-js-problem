function waitingTime (watingtime,serialnumber){
    if (!Array.isArray(watingtime) || typeof serialnumber !== "number"){
        return "Invalid Input";
    }
    if (serialnumber <= watingtime.length){
        return 0;
    }
    let  totaltime =watingtime.reduce((sum,time) => sum+time,0);
    let averagetime =Math.round(totaltime/ watingtime.length) ;
       return(serialnumber-watingtime.length)* averagetime;
}
console.log(waitingTime([3, 5, 7, 11, 6], 10)); 
console.log(waitingTime([13, 2], 6));          
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));              
console.log(waitingTime(7, 10));              
console.log(waitingTime("[6,2]", 9));         
console.log(waitingTime([7, 8, 3, 4, 5], "9"));