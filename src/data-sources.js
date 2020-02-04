let randomWholeInt = max => Math.floor(Math.random() * Math.floor(max));

let coffeeData = [];
for (let i = 1; i < 31; i++) {
  coffeeData.push({
    date: new Date(2020, 0, i),
    name: "dollars, day " + i,
    value: randomWholeInt(10)
  });
}

let excerciseData = [];
for (let i = 1; i < 31; i++) {
  excerciseData.push({
    date: new Date(2020, 0, i),
    name: "minutes, day " + i,
    value: randomWholeInt(180)
  });
}

export const dataSources = [
  {
    label: "Daily Money Spent on Coffee, 30 day period",
    value: "money-on-coffee-30day",
    data: coffeeData
  },
  {
    label: "Daily Excercise Minutes, 30 day period",
    value: "excercise-minutes-30day",
    data: excerciseData
  }
];
