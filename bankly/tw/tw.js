//refactor with only 3 arrays, ones, tens, teens.  use mod operator
//noon & midnight edge cases
function timeWord(clock) {
  try {
    //split the clock into hours and minutes and then map to turn str to num
    let [hours, minutes] = clock.split(":").map(Number);
    if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
      throw new RangeError(
        "The hours must be between 00-23 and minutes must be 0-59"
      );

    if (hours === 0 && minutes === 0) return "midnight";
    else if (hours === 12 && minutes === 0) return "noon";

    //get the text of the hours
    let textHours = getHours(hours);
    let textMinutes = getMinutes(minutes);
    let amOrPm = getAmOrPm(hours);
    //if hours is noon or midnight return

    return `${textHours} ${textMinutes} ${amOrPm}`.trim();
  } catch (err) {
    console.error(err);
  }
}
const onesSeries = [
  "twelve",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
];
function getHours(hours) {
  return onesSeries[hours % 12];
}

function getMinutes(minutes) {
  if (minutes === 0) return "o'clock";

  let tenSeriesNumbers = [null, "ten", "twenty", "thirty", "forty", "fifty"];

  let digitOne = Math.floor(minutes / 10);
  let digitTwo = minutes % 10;

  //iniate variable for both digits
  let digitOneAndDigitTwo;

  //if minutes only has value in ones place like :01 => oh one
  if (digitOne === 0 && digitTwo !== 0) {
    digitOne = "oh ";

    digitTwo = onesSeries[digitTwo];
    digitOneAndDigitTwo = `${digitOne}${digitTwo}`;

    //if minutes has a value that's tens series :20=>twenty
  } else if (digitOne !== 0 && digitTwo === 0) {
    digitOneAndDigitTwo = tenSeriesNumbers[digitOne];
  }
  //if minutes has 1 in tens place and not a 0 in ones place, return elevenSeriesNum like :12=>twelve
  else if (digitOne === 1 && digitTwo != 0) {
    let elevenSeriesNumbers = [
      null,
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
    ];

    digitOneAndDigitTwo = elevenSeriesNumbers[digitTwo];
  } else {
    digitOneAndDigitTwo = `${tenSeriesNumbers[digitOne]} ${onesSeries[digitTwo]}`;
  }
  return digitOneAndDigitTwo;
}

function getAmOrPm(hours) {
  let periodOfTime = hours < 12 ? "am" : "pm";
  return periodOfTime;
}
module.exports = { timeWord, getHours, getMinutes, getAmOrPm };
