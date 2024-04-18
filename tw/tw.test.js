// const timeWord = require("./timeWord");
const { timeWord, getHours, getMinutes, getAmOrPm } = require("./timeWord");

describe("#timeword", () => {
  test("it is a function", () => {
    expect(typeof timeWord).toBe("function");
  });
});
describe("hours return correct word", () => {
  test("input of 00:00 returns the string 'midnight'", () => {
    expect(getHours(["00", "00"])).toEqual("midnight");
  });
  test("input of 00:12 returns the hours 'twelve'", () => {
    expect(getHours(["00", "12"])).toEqual("twelve");
  });
  test("input of 12:00 returns the time 'noon'", () => {
    expect(getHours(["12", "00"])).toEqual("noon");
  });
  test("input of 01:00 returns the hours 'one'", () => {
    expect(getHours(["01", "00"])).toEqual("one");
  });
  test("input of 15:00 returns the hours 'three'", () => {
    expect(getHours(["15", "00"])).toEqual("three");
  });
});

describe("noon and midnight works", () => {
  test("input of 00:00 returns midnight", () => {
    expect(timeWord("00:00")).toEqual("midnight");
  });
  test("input of 12:00 returns noon", () => {
    expect(timeWord("12:00")).toEqual("noon");
  });
});
describe("noon and midnight does not work if minutes are > 0", () => {
  test("input of 12:01 does not return noon", () => {
    expect(timeWord("12:01")).not.toEqual("noon");
  });
  test("input of 00:01 does not return midnight", () => {
    expect(timeWord("12:01")).not.toEqual("midnight");
  });
});

describe("minutes input with 0 as first digit works", () => {
  test("minutes input of :01 returns oh one", () => {
    expect(getMinutes(1)).toEqual("oh one");
  });
  test("minutes input of :10 does not return oh one", () => {
    expect(getMinutes(10)).not.toEqual("oh one");
  });
});

describe("minutes in ten series works", () => {
  test("minutes input of tens place and 0 for ones place returns tens num", () => {
    expect(getMinutes(10)).toEqual("ten");
    expect(getMinutes(40)).toEqual("forty");
    expect(getMinutes(41)).not.toEqual("forty");
  });
});

describe("minutes input is an eleven series number", () => {
  test("eleven series num works", () => {
    expect(getMinutes(11)).toEqual("eleven");
    expect(getMinutes(14)).toEqual("fourteen");
  });
});

describe("minutes input is not single digit or a tens number or an eleven series number", () => {
  test("tens + ones works", () => {
    expect(getMinutes(22)).toEqual("twenty two");
    expect(getMinutes(59)).toEqual("fifty nine");
  });
});

describe("getAmOrPm works", () => {
  test("am works", () => {
    expect(getAmOrPm(9)).toEqual("am");
    expect(getAmOrPm(1)).toEqual("am");
    expect(getAmOrPm(11)).toEqual("am");
    expect(getAmOrPm(12)).not.toEqual("am");
  });
  test("pm works", () => {
    expect(getAmOrPm(12)).toEqual("pm");
    expect(getAmOrPm(23)).toEqual("pm");
    expect(getAmOrPm(4)).not.toEqual("pm");
  });
});

describe("throws error if time is out of range ", () => {
  test("input of num greater than 23 returns error", () => {
    expect(() => timeWord("24:00")).toThrow();
  });
});

// Full functionality
describe("function works as expected returning hours, minutes, and time period", () => {
  test("works with minutes having 0 in ones place", () => {
    expect(timeWord("01:01")).toEqual("one oh one am");
  });
  test("works with 10:10", () => {
    expect(timeWord("10:10")).toEqual("ten ten am");
  });
  test("works with 00:12", () => {
    expect(timeWord("00:12")).toEqual("twelve twelve am");
  });
  test("works with 01:00", () => {
    expect(timeWord("01:00")).toEqual("one o'clock am");
  });
  test("works with 06:30", () => {
    expect(timeWord("06:30")).toEqual("six thirty am");
  });
  test("works with 10:34", () => {
    expect(timeWord("10:34")).toEqual("ten thirty four am");
  });
  test("works with 12:09", () => {
    expect(timeWord("12:09")).toEqual("twelve oh nine pm");
  });
  test("works with 23:23", () => {
    expect(timeWord("23:23")).toEqual("eleven twenty three pm");
  });
});
