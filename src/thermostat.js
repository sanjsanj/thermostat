var Thermostat = function () {
  this.temp = 20;
  this.psmode = true;
};

Thermostat.prototype.increase = function(){
  if (this.temp < 32 && !this.psmode) {
    this.temp += 1;
  };
  if (this.temp < 25 && this.psmode) {
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

Thermostat.prototype.reset = function() {
  this.temp = 20;
};

Thermostat.prototype.color = function() {
  if (this.temp < 18) {
    return 'green';
  };
  if (this.temp < 25) {
    return 'yellow';
  };
  return 'red';
};
