function sendNotification(email){
    if (typeof email !== "string" || email.indexOf("@") ==-1){
        return "Invalid Email";
    }

const [username,domain]= email.split("@");
if (!username || !domain){
    return "Invalid Email";
}
return `${username} sent you an email from ${domain}`;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com "));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));