/**
 * @description A helper module to supply the functions / properties in demo code.
 * No actual use
 * @module helpers
 * @summary module for demonstrating functions to pass linting tests
 */

function showError(message = 'error') {
    console.error(message);
}

const updateCanvas = () => true;

const updateSimulation = () => true;

function scheduleUpdate() {
    return true;
}

function changeInputSize(param = 1) {
    return param;
}

export {
    showError,
    updateCanvas,
    updateSimulation,
    scheduleUpdate,
    changeInputSize,
};
