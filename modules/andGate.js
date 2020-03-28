/* eslint-disable import/extensions */
/**
 * @description And gate is one of three many fundamental gate available in the simulator.
 * The following class handles the logic and functioning of the AndGate simulator component
 * @module AndGate
 * @requires Scopes
 * @requires Node
 * @requires helpers
 * @see helpers
 * @see Node
 * @summary the fundamental and gate
 */

import CircuitElement from './circuitElement.js';
import globalScope from './scopes.js';
import Node from './Node.js';
import { changeInputSize } from './helpers.js';
/**
 * Class represent the AndGate
 */
class AndGate extends CircuitElement {
    /**
     * the and gate component
     * @constructor
     * @extends CircuitElement
     * @param {number} x x coordinate of element
     * @param {number} y y coordinate of element
     * @param {object} scope is an instance of newCircuit which represents the current element scope
     * @param {string} dir the default direction of the element
     * @param {number} inputLength the number of nodes attached to element (or input)
     * @param {number} bitWidth the number of bits transmitted through input line
     */
    constructor(
        x,
        y,
        scope = globalScope,
        dir = 'RIGHT',
        inputLength = 2,
        bitWidth = 1,
    ) {
        /** call the parent class circuitElement's constructor */
        super(x, y, scope, dir, bitWidth);

        /*
         * this sets the width and height of the element if its rectangular
         * and the reference point is at the center of the object.
         * width and height define the X and Y distance from the center
         */
        this.rectangleObject = false;
        this.setDimensions(15, 20);

        // array containing input nodes
        this.inp = [];
        this.inputSize = inputLength;

        // if odd number of inputs in element
        let yIndex;
        if (inputLength % 2 === 1) {
            // add one half of inputs
            for (let i = 0; i < inputLength; i += 1) {
                if (i < inputLength / 2 - 1) {
                    // add the first half of inputs
                    yIndex = -10 * (i + 1);
                } else if (i === inputLength / 2 - 1) {
                    // add the middle input
                    yIndex = 0;
                } else {
                    // the the remaining half of inputs
                    yIndex = 10 * (i + 1 - inputLength / 2 - 1);
                }

                // push items into input array
                this.inp.push(new Node(-10, yIndex, 0, this));
            }
        } else {
            // symmetrically add elements as no mid element
            for (let i = 0; i < inputLength; i += 1) {
                if (i < inputLength / 2) {
                    yIndex = -10 * (i + 1);
                } else {
                    yIndex = 10 * (i + 1 - inputLength / 2);
                }

                // push item into input array
                this.inp.push(new Node(-10, yIndex, 0, this));
            }
        }

        // link the output with the component
        this.output1 = new Node(20, 0, 1, this);

        this.alwaysResolve = true;
        this.verilogType = 'and';
        this.tooltipText = 'And Gate Tooltip : Implements logical conjunction';
        this.changeInputSize = changeInputSize;
    }
}

export { AndGate };
