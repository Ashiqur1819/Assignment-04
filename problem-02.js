function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email";
    }
    
    email = email.split('@');
    const userName = email[0];
    const domainName = email[1];
    return userName + " sent you an email from " + domainName;
}

const notification = sendNotification("zihad@gmail.com");
const notification2 = sendNotification("farhan34@yahoo.com");
const notification3 = sendNotification("nadim.naem5@outlook.com");
const notification4 = sendNotification("fahim234.hotmail.com");
const notification5 = sendNotification("sadia8icloud.com");


console.log(notification)
console.log(notification2)
console.log(notification3)
console.log(notification4)
console.log(notification5)
