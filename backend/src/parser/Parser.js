'use strict';
const fs = require('fs');
const path = require('path');
const ohm = require('ohm-js');
const AbstractSyntaxTree = require('./lib/AbstractSyntaxTree');
const factExpressionParser = require('./lib/factExpressionTemplateParser');

const factExpressionGrammar = ohm.grammar(fs.readFileSync(path.join(__dirname,'grammars/factexpression.ohm')));

class Parser {
    parseFactExpressionTemplate(template){
        var ast = new AbstractSyntaxTree();

        return factExpressionParser(factExpressionGrammar, template, ast);
    }
}

module.exports = Parser;