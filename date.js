// toDay-section

const weekDay = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const day = new Date();
let toDay = weekDay[day.getDay()];
document.getElementById("currentday").innerText = toDay;



// date section

const todayDate = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const month = monthNames[todayDate.getMonth()];
const days = todayDate.getDate();
const year = todayDate.getFullYear(); 
const nowDate = `${month} ${days} ${year}`;
document.getElementById("currentdate").innerHTML = nowDate;



