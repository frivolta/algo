import { steps } from ".";

let spy: jest.SpyInstance;
beforeEach(() => {
  spy = jest.spyOn(console, "log");
});

afterEach(() => {
  spy.mockRestore();
});

test("steps is a function", () => {
  expect(typeof steps).toEqual("function");
});

test("steps called with n = 1", () => {
  steps(1);
  expect(spy.mock.calls[0][0]).toEqual("#");
  expect(spy.mock.calls.length).toEqual(1);
});

test("steps called with n = 2", () => {
  steps(2);
  expect(spy.mock.calls[0][0]).toEqual("# ");
  expect(spy.mock.calls[1][0]).toEqual("##");
  expect(spy.mock.calls.length).toEqual(2);
});

test("steps called with n = 3", () => {
  steps(3);
  expect(spy.mock.calls[0][0]).toEqual("#  ");
  expect(spy.mock.calls[1][0]).toEqual("## ");
  expect(spy.mock.calls[2][0]).toEqual("###");
  expect(spy.mock.calls.length).toEqual(3);
});
