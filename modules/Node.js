/* eslint-disable import/extensions */
/**
 * @description Node is the most fundamental component in circuit simulation,
 * and is the component which is the most interacted with. A node can be dragged
 * around,rotated, refreshed and can be connected to other components as well
 * @module Node
 * @requires helpers
 * @see helpers
 * @summary A node is the smallest and most fundamental component of the
 * simulator which is most interacted with by the user
 */

import {
    showError,
    updateCanvas,
    updateSimulation,
    scheduleUpdate,
} from './helpers.js';

let uniqueIdCounter = 0;
/**
 * @description Node, the fundamental circuit element
 */
class Node {
    /**
     * @param {number} x X coordinate of node
     * @param {number} y Y coordinate of node
     * @param {number} type integer denoting type of node
     * @param {object} parent parent element, e.g. andGate object
     * @param {number} bitWidth number of bits transmitted via input line
     * @param {string} label label string for the node
     */
    constructor(x, y, type, parent, bitWidth = undefined, label = '') {
        // if x and y coordinate of node not numbers, display error
        if (Number.isNaN(x) || Number.isNaN(y)) {
            this.delete();
            showError('Fatal error occurred');
            return;
        }

        this.forceResetNodes = true;
        this.objectType = 'Node';

        /**
         * uniqueIdCounter assigns incremental ids to all nodes,
         * starting from 0 to uniquely identify them
         * @deprecated
         */
        this.id = `node${uniqueIdCounter}`;
        uniqueIdCounter += 1;

        // store parent element / node reference
        this.parent = parent;

        if (type !== 2 && this.parent.nodeList !== undefined) {
            this.parent.nodeList.push(this);
        }

        /*
         * if this node does not explicitly have a custom bit-width,
         * then assign the bid-width of parent
         */
        if (bitWidth === undefined) {
            this.bitWidth = parent.bitWidth;
        } else {
            this.bitWidth = bitWidth;
        }

        this.label = label;

        // store coordinates of previous node
        this.prevx = undefined;
        this.prevy = undefined;

        // store coordinates of left attachment
        this.leftx = x;
        this.lefty = y;

        // set coordinates of current node
        this.x = x;
        this.y = y;

        // set integer representing type of node
        this.type = type;

        // set array containing connections to node
        this.connections = [];

        // set state of node
        this.value = undefined;
        this.radius = 5;
        this.clicked = false;
        this.hover = false;
        this.wasClicked = false;
        this.scope = this.parent.scope;
        this.prev = 'a';
        this.count = 0;
        this.highlighted = false;

        /**
         * @description: function called during rotation or refresh
         */
        this.refresh = () => {
            // function to call to refresh state of node
            // dummy function
            this.count = 0;
            return true;
        };

        // need to research mode to understand type property of node
        if (this.type === 2) {
            this.parent.scope.nodes.push(this);
        }

        // set the scope of all nodes of parent as this node
        // this.parent.scope.allNodes.push(this);

        // set the state of node queue
        this.queueProperties = {
            inQueue: false,
            time: undefined,
            index: undefined,
        };
    }

    /**
     * @description to set the node label
     * @param {string} label label of the current node
     */
    set setLabel(l) {
        this.label = l;
    }

    /**
     * @description this method is used to connect an element remotely to current node
     * @param {object} element object referencing to element connected to node
     */
    connectWireLess(element) {
        // if referenced to current node, skip operation
        if (element === this) return;

        // if element has this node registered as connection, skip operation
        if (element.connections.contains(this)) return;

        // register passed element as a connection
        this.connections.push(element);

        // register this node as a connection in element
        element.connections.push(this);

        // update the canvas
        updateCanvas();

        // update the simulator state, i.e. simulation output
        updateSimulation();

        // schedule for update
        scheduleUpdate();
    }
}

export default Node;
