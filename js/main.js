class Car {
  colors;
  make;
  speed;
  combi;
  imgCar;

  constructor(colors, make, speed, combi, imgCar) {
    this.colors = colors;
    this.make = make;
    this.speed = speed;
    this.combi = combi;
    this.imgCar = imgCar;
  }
}

const audi = new Car(
  "#ff0000",
  "Audi",
  156,
  true,
  "https://mediaservice.audi.com/media/fast/H4sIAAAAAAAAAFvzloG1tIiBOTrayfuvpGh6-m1zJgaGigIGBgZGoDhTtNOaz-I_2DhCHsCEtzEwF-SlMwJZKUycmbmJ6an6QD4_I3taTmV-aUkxO0grT6IZW1LM5FXvttkx5OyX3LxWaWLSLgZWoC7GeUCCWQhI8KUBCU5VBjAJMm8-iLAD8ZksmRkYWCuAjEgGEODjKy3KKUgsSszVK89MKckQ1DAgEgizu7iGOHr6BAMAWEMXeOkAAAA?wid=850"
);
const skoda = new Car(
  "#ffffff",
  "Skoda",
  110,
  true,
  "https://skodavisualizer.blob.core.windows.net/skoda3d/octavia-combi.jpg"
);
const volvo = new Car(
  "#bbbaba",
  "Volvo",
  200,
  false,
  "https://www.volvocars.com/images/v/-/media/applications/pdpspecificationpage/my24/s60-fuel/pdp/s60-fuel-hero-4x3-update.jpg?h=1440&iar=0&w=1920"
);

function createHtmlForCar(car) {
  const color = document.createElement("input");
  color.style.display = "block";
  color.type = "color";
  color.value = car.colors;

  const makeElement = document.createElement("p");
  makeElement.innerHTML = car.make;
  makeElement.style.borderTop = "1px solid black";

  const speedElement = document.createElement("span");
  speedElement.innerHTML = car.speed;

  const speedLabel = document.createElement("label");
  speedLabel.innerHTML = " Km/h";

  const isCombi = document.createElement("input");
  isCombi.style.display = "block";
  isCombi.type = "checkbox";
  isCombi.checked = car.combi;
  isCombi.disabled = true;

  const carImg = document.createElement("img");
  carImg.src = car.imgCar;
  carImg.style.maxWidth = "100px";

  const theDiv = document.getElementById("cars");
  theDiv.style.border = "1px solid black";
  theDiv.appendChild(makeElement);
  theDiv.appendChild(carImg);
  theDiv.appendChild(color);
  theDiv.appendChild(speedElement);
  theDiv.appendChild(speedLabel);
  theDiv.appendChild(isCombi);
}

const bilfirma = [audi, skoda, volvo];

for (let i = 0; i < bilfirma.length; i++) {
  createHtmlForCar(bilfirma[i]);
}
