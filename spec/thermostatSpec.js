describe('thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('A new thermostat has', function() {

    it('a default temp of 20', function() {
      expect(thermostat.temp).toBe(20);
    });

    it('a button to increase temp by one', function(){
      thermostat.increase();
      expect(thermostat.temp).toBe(21);
    });

    it('a button to decrease temp by one', function(){
      expect(thermostat.temp).toBe(20);
      thermostat.decrease();
      expect(thermostat.temp).toBe(19);
    });

    it('power saving mode on by default', function(){
      expect(thermostat.psmode).toBe(true);
    });
  });

  describe('The temperature has', function(){
    it('a minimum value of 10', function(){
      for (var i = 0; i < 20; i++ ) {
        thermostat.decrease();
      };
      expect(thermostat.temp).toBe(10);
    });

    it('a maximum value of 32 without power saving mode', function(){
      thermostat.psmodeToggle();
      for (var i = 0; i < 20; i++ ) {
        thermostat.increase();
      };
      expect(thermostat.temp).toBe(32);
    });

    it('a maximum value of 25 with power saving mode', function(){
      for (var i = 0; i < 20; i++ ) {
        thermostat.increase();
      };
      expect(thermostat.temp).toBe(25);
    });

  });

  describe('The powersave mode can be', function(){
    it('toggled off', function(){
      thermostat.psmodeToggle();
      expect(thermostat.psmode).toBe(false);
    });

    it('toggled off then on', function(){
      thermostat.psmodeToggle();
      expect(thermostat.psmode).toBe(false);
      thermostat.psmodeToggle();
      expect(thermostat.psmode).toBe(true);
    });
  });

  describe('The reset button can', function(){
    it('set the temperature to 20', function(){
      thermostat.increase();
      expect(thermostat.temp).toBe(21);
      thermostat.reset();
      expect(thermostat.temp).toBe(20);
    });
  });

});
