'use strict';
/**
 * The part of reality that is relevant to the case to be modelled.
 * 
 * All objects in the universe of discourse must be identifiable.
 */

 const factExpressionTemplateParser = require('../parser/FactExpressionTemplateParser');

 class UniverseOfDiscourse {
    processFactExpressions(template, additionalExpressions){
        var parsedTemplate = factExpressionTemplateParser(template);        
    }
 }

module.exports = UniverseOfDiscourse;