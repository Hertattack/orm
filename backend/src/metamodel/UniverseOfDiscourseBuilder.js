'use strict';
const UniverseOfDiscourse = require('./UniverseOfDiscourse');

class UniverseOfDiscourseBuilder {
    
    constructor(options){
        this.parser = options.parser;
        this.factExpressions=[];
    }

    addFactExpressionsByParsing(template, additionalExpressions){
        var factExpressionTemplateAst = this.parser.parseFactExpressionTemplate(template);
        this.factExpressions.push({factExpressionTemplateAst, additionalExpressions});
        return this;
    }

    build(){
        var uod = new UniverseOfDiscourse();

        this.factExpressions.forEach(
            ({factExpressionTemplateAst, additionalExpressions})=>{
                var otes = factExpressionTemplateAst.nodesByType[factExpressionTemplateAst.NodeTypes.ObjectTypeExpression];
                if(otes){
                    otes.forEach(
                        (ote) => {
                            var ot = uod.getObjectType(ote.identifier);
                            if(!ot){
                                ot = uod.addObjectType(ote.identifier);                                
                            }
                            //uod.addObjectTypeExpression(ote.identifier, )
                        }
                    );
                    
                }
            }
        )

        return uod;
    }
}

module.exports = UniverseOfDiscourseBuilder;