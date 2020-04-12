'use strict';
const ObjectType = require('./ObjectType');
const ObjectTypeExpression = require('./ObjectTypeExpression');
/**
 * The part of reality that is relevant to the case to be modelled.
 * 
 * All objects in the universe of discourse must be identifiable.
 */

 class UniverseOfDiscourse {
    constructor(){
        this.objectTypes = {};
    }

    getObjectType(qualification){
        return this.objectTypes[qualification];
    }

    addObjectType(qualification){
        if(this.objectTypes[qualification]) throw new Error('object type exists');

        var newObjectType = new ObjectType(qualification);
        this.objectTypes[qualification] = newObjectType;

        return newObjectType;
    }
}

UniverseOfDiscourse.ObjectTypeExpression = ObjectTypeExpression;
UniverseOfDiscourse.ObjectType = ObjectType;

module.exports = UniverseOfDiscourse;