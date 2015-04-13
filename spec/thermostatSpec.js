describe('thermostat', function() {
  
  var thermostat;

  describe('A new thermostat has', function() {

    it('a default temp of 20', function() {
      thermostat = new Thermostat();
      expect(thermostat.temp()).toBe(20);
    });

    it('a button to increase temp by one', function(){
      thermostat = new Thermostat();
      thermostat.increase();
      expect(thermostat.temp()).toBe(21);
    });
  });
});
