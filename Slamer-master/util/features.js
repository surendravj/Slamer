exports.wisht = () => {
  currentTime = new Date();
  //getHour() function will retrieve the hour from current time
  if (currentTime.getHours() < 12)
    wish = "Good Morning"
  else if (currentTime.getHours() < 17)
    wish = "Good AFternoon"
  else if (currentTime.getHours() < 21)
    wish = "Good Evening"
  else
    wish = "Good Night"
  return wish;
}



exports.secreat = function gen() {
  sum = "";
  for (var i = 0; i < 6; i++) {
    var num = Math.floor(Math.random() * 10 + 1);
    sum = (sum + num);
  }
  return sum
}