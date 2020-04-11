require('chai').should();
const UniverseOfDiscourse = require('../src/metamodel/UniverseOfDiscourse').default;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
        var feTemplate = "{O=Dimension:The <width>} of {O=Figure:figure <7>} is {O=Distance:<102>mm}";
        var additionalFe = [
            "The height of figure 8 is 10mm",
            "The width of figure 9 is 132mm"
        ]; 

        var uod = new UniverseOfDiscourse();
        uod.processFactExpressions(feTemplate, additionalFe);
 
        // UOD.objectTypes = [Dimension, Figure, Distance]
    });
  });
});