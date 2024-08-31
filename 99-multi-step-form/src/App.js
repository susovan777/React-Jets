import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const handlePrevious = () => {
    // if step is 1 then don't use prev button
    if (step > 1) setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    // if step is 3 then don't use next button
    if (step < 3) setStep((prev) => prev + 1);
  };

  return (
    <div>
      <div className="steps">
        {/* steps section */}
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>Step 1</div>
          <div className={step >= 2 ? "active" : ""}>Step 2</div>
          <div className={step >= 3 ? "active" : ""}>Step 3</div>
        </div>

        <h2 className="form-heading">
          {step === 1
            ? "Personal Information"
            : step === 2
            ? "Address Information"
            : "Confirmation"}
        </h2>
        {/* form section */}
        <form className="myForm">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Phone</label>
          <input type="number" />
        </form>

        {/* navigation button */}
        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlePrevious}
          >
            Previous
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
