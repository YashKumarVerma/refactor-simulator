## CircuitVerse Refactor Sample

The proposed directory structure would be

```
|-modules
|	-circuitElements
|		|- andGate.js
|		|- orGate.js
|		|- notGate.js
|	-coreComponents
|		|- Wire.js
|		|- Node.js
|	- UI.js
| 	- Misc.js
```

**Demo**

-   For demo, kindly refer the `andGate.js` and `Node.js` files.

**Supporting files with my understanding of codebase**

-   For references, `circuitElement.js` and `scopes.js` are also documented.

**Helper functions**

-   An additional file named `helpers.js` is added to supply functions required for `andGate.js` and `Node.js`

**Documentation**

-   The generated docs are available in `docs/` directory.
-   To generate again, run `jsdoc -r modules`

**Tests**

-   The tests runner can be seen by opening the `test/testRunner.html`
-   The testing module for and gate can be seen in `test/test.andGate.js`
-   Run the test by the following commands

```
$ npm install
$ npm test
```

**Pretter Config file**

-   `.prettierrc`

**Eslint Config File**

-   `.eslintrc.json`
