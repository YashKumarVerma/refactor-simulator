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

**Tests**

-   The tests for the andGate can be done by opening the testRunner.html

**Pretter Config file**

-   `.prettierrc`

**Eslint Config File**

-   `.eslintrc.json`

For security purposes, the file:// protocol is not allowed to load scripts, therefore a mini server is used
