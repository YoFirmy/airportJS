"use strict";

describe("Aiport", () => {
  let airport;
  let plane;
  
  beforeEach(() => {
    airport = new Airport();
    plane = jasmine.createSpy("plane", ["land"]);
  });

  it("has not planes by default", () => {
    expect(airport.planes()).toEqual([]);
  });

  it("can clear planes for landing", () => {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it("can clear planes for takeoff", () => {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
});
