const UniverseOfDiscourse = require('./metamodel/UniverseOfDiscourse');

var feTemplate = "{O=Dimension:The <width>} of {O=Figure:figure <7>} is {O=Distance:<102>mm}";
var additionalFe = [
    "The height of figure 8 is 10mm",
    "The width of figure 9 is 132mm"
]; 

var uod = new UniverseOfDiscourse();
uod.processFactExpressions(feTemplate, additionalFe);
