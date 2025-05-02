import React, { useState } from "react";

const ScientificCalculator = () => {
    const [display, setDisplay] = useState("");
    const [memory, setMemory] = useState(null);
    const [angleMode, setAngleMode] = useState("Deg");

    const handleInput = (value) => {
        setDisplay((prev) => prev + value);
    };

    const clearDisplay = () => setDisplay("");
    const clearEntry = () => setDisplay(display.slice(0, -1));
    const toggleSign = () => setDisplay((prev) => (prev ? String(-parseFloat(prev)) : ""));
    const calculateResult = () => {
        try {
            // eslint-disable-next-line no-eval
            setDisplay(String(eval(display.replace("×", "*").replace("÷", "/"))));
        } catch {
            setDisplay("Error");
        }
    };

    const handleMemory = (action) => {
        if (action === "M+") setMemory(parseFloat(display));
        if (action === "M-") setMemory(null);
        if (action === "MR") setDisplay(memory ? String(memory) : "");
        if (action === "MC") setMemory(null);
    };

    const handleAdvancedFunctions = (func) => {
        try {
            const value = parseFloat(display);
            let result;
            switch (func) {
                case "x²":
                    result = Math.pow(value, 2);
                    break;
                case "x³":
                    result = Math.pow(value, 3);
                    break;
                case "√":
                    result = Math.sqrt(value);
                    break;
                case "log":
                    result = Math.log10(value);
                    break;
                case "ln":
                    result = Math.log(value);
                    break;
                case "sin":
                    result = Math.sin(angleMode === "Deg" ? (value * Math.PI) / 180 : value);
                    break;
                case "cos":
                    result = Math.cos(angleMode === "Deg" ? (value * Math.PI) / 180 : value);
                    break;
                case "tan":
                    result = Math.tan(angleMode === "Deg" ? (value * Math.PI) / 180 : value);
                    break;
                default:
                    result = "Error";
            }
            setDisplay(String(result));
        } catch {
            setDisplay("Error");
        }
    };

    const toggleAngleMode = () => {
        setAngleMode((prev) => (prev === "Deg" ? "Rad" : "Deg"));
    };

    return (
        <div className="calculator">
            <div className="display">{display || "0"}</div>
            <div className="buttons">
                {/* Numeric Buttons */}
                {[...Array(10).keys()].map((num) => (
                    <button key={num} onClick={() => handleInput(num.toString())}>
                        {num}
                    </button>
                ))}
                <button onClick={() => handleInput(".")}>.</button>
                <button onClick={calculateResult}>=</button>

                {/* Basic Operators */}
                <button onClick={() => handleInput("+")}>+</button>
                <button onClick={() => handleInput("-")}>-</button>
                <button onClick={() => handleInput("×")}>×</button>
                <button onClick={() => handleInput("÷")}>÷</button>
                <button onClick={() => handleInput("%")}>%</button>

                {/* Advanced Functions */}
                <button onClick={() => handleAdvancedFunctions("x²")}>x²</button>
                <button onClick={() => handleAdvancedFunctions("x³")}>x³</button>
                <button onClick={() => handleAdvancedFunctions("√")}>√</button>
                <button onClick={() => handleAdvancedFunctions("log")}>log</button>
                <button onClick={() => handleAdvancedFunctions("ln")}>ln</button>
                <button onClick={() => handleAdvancedFunctions("sin")}>sin</button>
                <button onClick={() => handleAdvancedFunctions("cos")}>cos</button>
                <button onClick={() => handleAdvancedFunctions("tan")}>tan</button>

                {/* Memory Functions */}
                <button onClick={() => handleMemory("M+")}>M+</button>
                <button onClick={() => handleMemory("M-")}>M-</button>
                <button onClick={() => handleMemory("MR")}>MR</button>
                <button onClick={() => handleMemory("MC")}>MC</button>

                {/* Clear and Sign Toggle */}
                <button onClick={clearDisplay}>C</button>
                <button onClick={clearEntry}>CE</button>
                <button onClick={toggleSign}>±</button>

                {/* Angle Mode */}
                <button onClick={toggleAngleMode}>{angleMode}</button>
            </div>
        </div>
    );
};

export default ScientificCalculator;