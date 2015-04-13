describe('thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('A new thermostat has', function() {

    it('a default temp of 20', function() {
      expect(thermostat.temp()).toBe(20);
    });

    it('a button to increase temp by one', function(){
      thermostat.increase();
      expect(thermostat.temp()).toBe(21);
    });

    it('a button to decrease temp by one', function(){
      thermostat.decrease();
      expect(thermostat.temp()).toBe(19);
    });
  });
});
