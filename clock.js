setInterval(() => {
  d = new Date();
   hTime = d.getHours();
   mTime = d.getMinutes();
   sTime = d.getSeconds();
  hrotation = 30*hTime + mTime/2;
  mrotation = 6*mTime;
  srotation = 6*sTime;
  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;
  second.style.transform = `rotate(${srotation}deg)`;
}, 1000);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;
document.write(today)