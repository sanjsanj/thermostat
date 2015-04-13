var Thermostat = function () {
  this.temp = 20;
  this.psmode = true;
};

Thermostat.prototype.increase = function(){
  if (this.temp < 32) {
    this.temp += 1;
  };
  return(this.temp);
};

Thermostat.prototype.decrease = function (){
  if (this.temp > 10) {
    this.temp -= 1;
  };
  return(this.temp);
};

Thermostat.prototype.psmodeToggle = function() {
  this.psmode = !this.psmode;
};
