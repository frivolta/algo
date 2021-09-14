import { pyramid } from ".";

let spy: jest.SpyInstance;
beforeEach(() => {
  spy = jest.spyOn(console, "log");
});

afterEach(() => {
  spy.mockRestore();
});

test("pyramid is a function", () => {
  expect(typeof pyramid).toEqual("function");
});

test("prints a pryamid for n = 2", () => {
  pyramid(2);
  expect(spy.mock.calls[0][0]).toEqual(" # ");
  expect(spy.mock.calls[1][0]).toEqual("###");
  expect(spy.mock.calls.length).toEqual(2);
});

test("prints a pryamid for n = 3", () => {
  pyramid(3);
  expect(spy.mock.calls[0][0]).toEqual("  #  ");
  expect(spy.mock.calls[1][0]).toEqual(" ### ");
  expect(spy.mock.calls[2][0]).toEqual("#####");
  expect(spy.mock.calls.length).toEqual(3);
});

test("prints a pryamid for n = 4", () => {
  debugger;
  pyramid(4);
  expect(spy.mock.calls[0][0]).toEqual("   #   ");
  expect(spy.mock.calls[1][0]).toEqual("  ###  ");
  expect(spy.mock.calls[2][0]).toEqual(" ##### ");
  expect(spy.mock.calls[3][0]).toEqual("#######");
  expect(spy.mock.calls.length).toEqual(4);
});
