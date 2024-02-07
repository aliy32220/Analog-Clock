setInterval(() => {
  date = new Date();
  hourElement = document.getElementById("hourId");
  minElement = document.getElementById("minId");
  // hourElement = document.getElementById('hourId')

  hours = date.getHours();
  mins = date.getMinutes();
  secs = date.getSeconds();

  rotateHours = 30 * hours + mins / 2;
  rotateMin = 6 * mins;
  rotateSec = 6 * secs;

  hourElement.style.transform = `rotate(${rotateHours}deg)`;
  minElement.style.transform = `rotate(${rotateMin}deg)`;
  // secId.style.transform = `rotate(${rotateSec}deg)`;
});
