console.log(" Initializing servers...");
let progress = 0;

const interval = setInterval(() => {
  progress += 10;
  console.log(` Setting up: ${progress}%`);
  if (progress >= 100) {
    clearInterval(interval);
    console.log(" All systems ready.");
  }
}, 500);