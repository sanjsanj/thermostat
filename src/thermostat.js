var Thermostat = function () {};

var Temp = 20;

Thermostat.prototype.temp = function(){
  return(Temp);
};

Thermostat.prototype.increase = function(){
  Temp += 1;
  return(Temp);
};
