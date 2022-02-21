// closure example
// GEC-->global executionc ontext
// MCP-->memory creation phase
// CEP-->Code execution phase


function hello(x) {
    const a = "varA";
    const b = "varB";
    return function() {
        console.log(a, b, x);
    }
}

const ans = hello("arg");
ans();

// there will be GEC
// Inside GEC we have memory creation phase and code execution phase
// in global memory "window{}" and "this" is present as a default values
//MCP-->
// WINDOW {}
// THIS:WINDOW
// hello:f
//ans:uninitialize
//
// FOR Code execution phase line 7-13 is 1 
// line 15 is 2
// line 16 is 3