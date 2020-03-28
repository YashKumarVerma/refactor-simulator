/**
 * @description Scopes are classes which contain the specifications for various scopes
 * (like globalScope). These scopes are used to determine the functionality of elements.
 * By default, the scope is assigned as local. The class<br /><br />
 *
 * => provisions a root element(an instance of circuitElement class) and stores details
 * about the current circuit under analysis. The scope class has methods to reset all
 * components of te circuit (nodes, splitters and subCircuits),<br /><br />
 *
 * => provisions all inputs in the circuit (for instance a half adder needs to provision
 * 2 inputs in the circuit simulation, which are effectively used when circuits are
 * embedded as sub-circuits), <br /><br />
 *
 * => provisions and operates the clock of the circuit segments, which is uniform for all
 * the components of the circuit, is regulated and maintained by the scopes class <br /><br />
 *
 * => provisions a recursion checker, which makes sure that no circular definitions exist
 * in the circuit under analysis <br /><br />
 *
 * => provisions a list of all the circuit the current circuit under analysis depends upon <br /><br />
 *
 * => provisions a layout manager which automatically reduces layout size depending on the
 * size of the circuit under analysis <br /><br />
 *
 * => provisions a circuit watcher which brings the circuit under analysis to the center of
 * the window frame - viewport <br /><br />
 *
 * => provisions numerous methods to setupEnvironment, watchCurrentCircuitState, setUpUi and
 * auto-save prompts via local storage checks, method to recover a project from local-storage  <br /><br />
 *
 * => provisions a method to watch for changes in window dimensions and re-setup the simulator
 * view <br /><br />
 *
 * => describes the `SimulatorArea`, by managing the state of the simulator view <br /><br />
 * @module Scopes
 * @summary module used to define scope of an element, the local environment in which a circuit runs
 */
class Scopes {
    constructor() {
        this.nodes = [];
        this.allNodes = [];
    }
}

export default Scopes;
