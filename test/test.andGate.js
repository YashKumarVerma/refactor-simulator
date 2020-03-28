/* eslint-disable import/extensions */

import { AndGate } from './../modules/andGate.js';
import globalScope from './../modules/scopes.js';

const assert = chai.assert;

describe('Testing  : Component :: AndGate ', () => {
    const andGate = new AndGate(10, 10, globalScope);

    it('andGate object should be defined', (done) => {
        // attempt to create andGate object
        try {
            const andGate = new AndGate(10, 10, globalScope);
            done();
            // catch error
        } catch (e) {
            done(e);
        }
    });

    it('x coordinates should be numbers', () => {
        assert.isNumber(andGate.x);
    });

    it('y coordinates should be numbers', () => {
        assert.isNumber(andGate.y, 'y coordinate should be a number');
    });

    it('bidwith should be integer', () => {
        assert.equal(Math.floor(andGate.bitWidth), andGate.bitWidth);
    });

    it('bidwidth should be positive integer', () => {
        assert.isNumber(andGate.bitWidth);
        assert.isAbove(andGate.bitWidth, 0, 'Bidwith should be a positive');
    });

    it('rectangleObject should be boolean', () => {
        assert.isBoolean(andGate.rectangleObject);
    });

    it('rectangleObject should be boolean', () => {
        assert.isBoolean(andGate.rectangleObject);
    });

    it('input element storage should be stored in array', () => {
        assert.isArray(andGate.inp);
    });

    it('inputSize should be integer, number', () => {
        assert.isNumber(andGate.inputSize);
        assert.equal(Math.floor(andGate.inputSize), andGate.inputSize);
    });

    it('andGate should always resolve', () => {
        assert.isTrue(andGate.alwaysResolve);
    });

    it('verilog should in string', () => {
        assert.isString(andGate.verilogType);
    });

    it('tooltip text should be non empty string ', () => {
        assert.isNotEmpty(andGate.tooltipText);
    });

    it('output attachment should be node', () => {
        assert.isObject(andGate.output1);
    });

    console.log(andGate);
});
