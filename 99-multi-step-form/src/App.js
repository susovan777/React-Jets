import { useState } from "react";
import PersonalForm from "./Components/PersonalForm";
import AddressForm from "./Components/AddressForm";
import NavigationButton from "./Components/Button";

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
    <>
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
        {step === 1 ? <PersonalForm /> : step === 2 ? <AddressForm /> : ""}

        {/* navigation button */}
        <div className="buttons">
          {step === 1 ? (
            <NavigationButton value="Next" clickEvent={handleNext} />
          ) : step === 2 ? (
            <>
              <NavigationButton value="Previous" clickEvent={handlePrevious} />
              <NavigationButton value="Next" clickEvent={handleNext} />
            </>
          ) : step === 3 ? (
            <>
              <NavigationButton value="Previous" clickEvent={handlePrevious} />
              <NavigationButton value="Submit" clickEvent={handleNext} />
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}

export default App;
