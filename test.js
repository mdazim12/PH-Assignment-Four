
function sendNotification(email) {
    const mail = email.includes('@');
    if(!mail){
        return "Invalid Email";
    }
    const userName = email.split('@')[0];
    const userHost = email.split('@')[1];

    return userName + " sent you an email from " + userHost;
      
}



function checkDigitsInName(name) {
    if(typeof name !== 'string'){
        return  "Invalid Input"
    }

   const num = /\d/.test(name);

   return num;
    
}



function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return  "Invalid Input";
    }
    let totalMark = obj.testScore + obj.schoolGrade;
    
    if(obj.isFFamily){
        totalMark = totalMark + 20;
    }

   if(totalMark >= 80){
    return true;
   }
   else{
    return false;
   }

 }



 
function  waitingTime(waitingTimes  , serialNumber) {
    if(typeof waitingTimes !== 'Array' || typeof serialNumber !== 'Number'){
        return 'Invalid Input';
    }

   let sum = 0;
   for(const item of waitingTimes){
    sum = sum + item;
   }

   const avargeTime = sum / waitingTimes.length;
   const roundTime = Math.round(avargeTime);
   

   const issratSerial = serialNumber - waitingTimes.length -1;

     const isrratTime = roundTime * issratSerial ;

     return isrratTime;

   
   
}















