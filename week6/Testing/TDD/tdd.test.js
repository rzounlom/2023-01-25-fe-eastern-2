const { reverse } = require("./end.js");

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

describe("reverse", () => {
  it("should reverse a string", () => {
    const reverseStr = reverse("hello");

    expect(reverseStr).toEqual("olleh");
  });

  it("should return error string if no string is provided in the function", () => {
    const reverse2 = reverse();

    expect(reverse2).toEqual("Please pass in a str");
  });
});
