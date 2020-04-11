const fs = require('fs');
const path = require('path');
const ohm = require('ohm-js');

const contents = fs.readFileSync(path.join(__dirname,'grammars/factexpression.ohm'));
//"{O=Dimension:The <width>} of {O=Figure:figure <7>} is {O=Distance:<102>mm}";
const grammar = ohm.grammar(contents);
const semantics = grammar.createSemantics().addOperation('buildAst',{
    FactExpression : function(startText, firstOte, otherTexts, otherOtes, finalText){
        var indexedElements = [];
        if(startText && startText.sourceString > "") indexedElements.push(startText.sourceString);

        indexedElements.push(firstOte.buildAst());
        if(otherTexts) otherTexts.children.forEach(
            (otherText,textIndex)=>{
                indexedElements.push(otherText.sourceString);
                indexedElements.push(otherOtes.children[textIndex].buildAst());
            }
        );

        if(finalText && finalText.sourceString > "") indexedElements.push(finalText.sourceString);

        return {indexedElements, type: "Fact Expression"};
    },
    ObjectTypeExpression : function(openSequence, identifier, colon, internalExpression, closeBracket ){
        return {
            type: "Object Type Expression",
            identifier: identifier.sourceString,
            internalExpression: internalExpression.sourceString
        }
    }
});

function factExpressionTemplateParser(template){
    var result = grammar.match(template);
    
    console.dir(result.succeeded());
    console.dir(semantics(result).buildAst());
}





module.exports = factExpressionTemplateParser;