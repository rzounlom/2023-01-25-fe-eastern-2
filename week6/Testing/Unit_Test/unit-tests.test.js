const { reverse, returnVowels, isPalindrome } = require("./end");

//example test function
function testFunction(str) {
  if (!str) {
    throw new Error("Please provide a string");
  }
  return str;
}

describe("testFunction", () => {
  test("should return a string", () => {
    const myStr = testFunction("John");
    expect(myStr).toBeTruthy();
    expect(myStr).toEqual("John");
  });

  test("should return an error when no string is provided", () => {
    //testing errors
    expect(() => testFunction()).toThrow(Error);
  });
});

//create test for reverse function
describe("reverse function", () => {
  it("should return a string in reverse", () => {
    let word = "hello";
    const reversedStr = reverse(word);

    expect(reversedStr).toEqual("olleh");
  });
});

//testing returnVowels
describe("returnVowels", () => {
  let str = "Jest is pretty dope";

  const vowels = returnVowels(str);

  it("should return the correct number of vowels in the provided string", () => {
    const vowels = returnVowels(str);
    expect(vowels).toBeTruthy();
    expect(vowels).toEqual(5);
  });

  it("should return error string if no string is provided in the function", () => {
    const vowels = returnVowels();

    expect(vowels).toEqual("Please pass in a str");
  });
});
