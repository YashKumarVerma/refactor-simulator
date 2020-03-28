/**
 * @description CircuitElement is the most critical component of the simulator as this
 * serves as the base class or abstract class which is ideally inherited by all valid
 * circuit elements of the simulator. This class describes the methods and properties
 * which are critical for a element to be compatible with other nodes, wires, inputs
 * and elements. Handles operations such as setters and getters for absolute positions,
 * copy of elements, linking elements to scopes, save the current object, save the element
 * and check for state changes like hover, clicked etc. <br /><br />
 *
 * The CircuitElement also handles the dimensions of the element, and setters for the same.
 * the reference point is also set at the center of the element<br /><br />
 *
 * The class also provisions methods to empower functionalities like dragging (active change
 * of old coordinates and new coordinates), update (updates the current position coordinates),
 * labels on elements, and the critical function which actually draws the circuit on the
 * canvas. The class also handles methods to delete current element, delete element along with
 * accompanying nodes, direction changes in element to change element's orientation, set bidWidth
 * of data feeds, set propagation delays in data feeds, and handle verilog operations <br /><br />
 * @module CircuitElement
 * @requires scopes for globalScope object
 * @requires helpers for canvasUpdate handles
 * @see helpers
 * @see scopes
 * @summary the fundamental and gate
 */
class CircuitElement {
    constructor(x, y, scope, dir, bitWidth) {
        this.x = x;
        this.y = y;
        this.scope = scope;
        this.dir = dir;
        this.bitWidth = bitWidth;
    }

    /**
     * @param {number} param dummy function to satisfy linting issues
     */
    setDimensions(param) {
        this.temp = param;
    }
}

export default CircuitElement;
