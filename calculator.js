let equation = "";
let lastResult = null; // Lưu kết quả của phép tính trước

// Append value to the equation
function appendValue(value) {
  const display = document.getElementById("display");
  equation += value;
  display.value = equation;
}

// Calculate the result
function calculate() {
  const display = document.getElementById("display");
  try {
    // Evaluate the equation
    const result = eval(equation);
    display.value = result;
    lastResult = result; // Lưu kết quả vào biến lastResult
    equation = result.toString(); // Cập nhật phép tính bằng kết quả
  } catch (error) {
    display.value = "Error!";
    equation = ""; // Reset phép tính nếu có lỗi
  }
}

// Clear the last character (C)
function clearDisplay() {
  const display = document.getElementById("display");
  equation = equation.slice(0, -1);
  display.value = equation;
}

// Reset the calculator (AC)
function resetCalculator() {
  const display = document.getElementById("display");
  equation = "";
  lastResult = null;
  display.value = "";
}

// Use the last result (ANS)
function useAns() {
  if (lastResult !== null) {
    appendValue(lastResult.toString());
  } else {
    alert("No previous result available!");
  }
}
