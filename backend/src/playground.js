const UniverseOfDiscourseBuilder = require('./metamodel/UniverseOfDiscourseBuilder');
const Parser = require('./parser/Parser');

var feTemplate = "{O=Dimension:The <width>} of {O=Figure:figure <7>} is {O=Distance:<102>mm}";
var additionalFe = [
    "The height of figure 8 is 10mm",
    "The width of figure 9 is 132mm"
]; 

var uodBuilder = new UniverseOfDiscourseBuilder({parser: new Parser()});
var uod = uodBuilder
            .addFactExpressionsByParsing(feTemplate, additionalFe)
            .build()
;

console.log(uod);