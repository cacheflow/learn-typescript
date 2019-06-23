enum DaysOfTheWeek {
  SUN = 100, MON, TUE, WED, THUR, FRI, SAT
}

let day: DaysOfTheWeek;

day = DaysOfTheWeek.MON;

if (day === DaysOfTheWeek.MON) {
  console.log('Got to go to work')
}

console.log("day is ", day)