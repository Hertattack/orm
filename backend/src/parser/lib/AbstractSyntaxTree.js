'use strict';

const NodeTypes = {
    FactExpression : 'Fact Expression',
    ObjectTypeExpression : "Object Type Expression",
    Leaf : "Leaf"
};

class AbstractSyntaxTree {
    constructor(){
        this.nodesByType = {};
        this.root = undefined;
    }

    get NodeTypes() {
        return NodeTypes;
    };

    addNode(node){
        this.root = node;

        if(!this.nodesByType[node.type]) this.nodesByType[node.type] = [];

        this.nodesByType[node.type].push(node);
        return node;
    }

    getNodeBuilder(nodeType){
        switch(nodeType){
            case NodeTypes.FactExpression:
                return factExpressionNode.bind(null, this);
            case NodeTypes.ObjectTypeExpression:
                return objectTypeExpressionNode.bind(null, this);
            default:
                return leafNode.bind(null, this); 
        }   
    }
}

AbstractSyntaxTree.NodeTypes = NodeTypes;

function leafNode(ast, parseResult){
    return ast.addNode({
        type: NodeTypes.Leaf,
        ast,
        value : parseResult
    });
}

function objectTypeExpressionNode(ast, openSequence, identifier, colon, internalExpression, closeBracket ){
    return ast.addNode({
        type: NodeTypes.ObjectTypeExpression,
        ast,
        identifier: identifier.sourceString,
        internalExpression: internalExpression.sourceString
    });
}

function factExpressionNode(ast, startText, firstOte, otherTexts, otherOtes, finalText){
    var sentenceElements = [];
    
    if(startText && startText.sourceString > "") sentenceElements.push(startText.sourceString);

    sentenceElements.push(firstOte.buildAst());
    if(otherTexts) otherTexts.children.forEach(
        (otherText,textIndex)=>{
            sentenceElements.push(otherText.sourceString);
            sentenceElements.push(otherOtes.children[textIndex].buildAst());
        }
    );

    if(finalText && finalText.sourceString > "") sentenceElements.push(finalText.sourceString);

    return ast.addNode({
        type: NodeTypes.FactExpression,
        ast,
        sentenceElements : []
    });
}

module.exports = AbstractSyntaxTree;