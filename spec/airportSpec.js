// getScript("plane.js")

describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  describe("Plane lands", function() {
    it("should confirm that plane has landed", function() {
      airport.instruct_land(plane);
      expect(airport.planes).toContain(plane);
    });
  });
});