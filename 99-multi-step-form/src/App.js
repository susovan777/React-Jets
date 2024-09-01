import { useState } from "react";
import PersonalForm from "./Components/PersonalForm";
import AddressForm from "./Components/AddressForm";
import NavigationButton from "./Components/Button";

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePrevious = () => {
    // if step is 1 then don't use prev button
    if (step > 1) setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    // if step is 3 then don't use next button
    localStorage.setItem("formData", JSON.stringify(formData));
    if (step < 3) setStep((prev) => prev + 1);
    console.log(formData);
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
        {step === 1 ? (
          <PersonalForm formData={formData} changeEvent={handleChange} />
        ) : step === 2 ? (
          <AddressForm formData={formData} changeEvent={handleChange} />
        ) : (
          <>
            <p>
              <strong>Name:</strong> {formData.name}
            </p>
            <p>
              <strong>Email:</strong> {formData.email}
            </p>
            <p>
              <strong>Phone:</strong> {formData.phone}
            </p>
            <p>
              <strong>Address Line 1:</strong> {formData.address1}
            </p>
            <p>
              <strong>Address Line 2:</strong> {formData.address2}
            </p>
            <p>
              <strong>City:</strong> {formData.city}
            </p>
            <p>
              <strong>State:</strong> {formData.state}
            </p>
            <p>
              <strong>ZIP Code:</strong> {formData.zipCode}
            </p>
          </>
        )}

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
