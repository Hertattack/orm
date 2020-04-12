'use strict';

function createSemantics(grammar, ast){
  return grammar.createSemantics().addOperation(
      'buildAst',
      {
        FactExpression : ast.getNodeBuilder(ast.NodeTypes.FactExpression),
        ObjectTypeExpression : ast.getNodeBuilder(ast.NodeTypes.ObjectTypeExpression) 
      }
    );
}

function factExpressionTemplateParser(grammar, template, ast){
    var semantics = createSemantics(grammar, ast);
    var parsedResult = grammar.match(template);
    if(!parsedResult) throw new Error("Could not parse template.");
    
    ast.root = semantics(parsedResult).buildAst();

    return ast;
}

module.exports = factExpressionTemplateParser;