function   calculateTax(monthlyincome,monthlyexpense){

    const  difference = monthlyincome - monthlyexpense;
    const tax = difference * 0.20;

     if(monthlyexpense<0 || monthlyincome<0){
            return "invalid Input";
     }
     if(monthlyincome<monthlyexpense){
        return "invalid Input";
     }



     return tax;
}
console.log(calculateTax(10000,3000));
console.log(calculateTax(34000,1753));
console.log(calculateTax(5000,1500));
console.log(calculateTax(7000,7000));
console.log(calculateTax(6000,-1500));
console.log(calculateTax(-5000,2000));
