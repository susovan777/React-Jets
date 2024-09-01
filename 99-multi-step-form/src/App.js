import { useEffect, useState } from "react";
import PersonalForm from "./Components/PersonalForm";
import AddressForm from "./Components/AddressForm";
import NavigationButton from "./Components/Button";
import Confirmation from "./Components/Confirmation";

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
    country: "",
    zipCode: "",
  });
  const [errors, setErrors] = useState({});
  // const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const savedData = localStorage.getItem("formData");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // 👇 if formData is updated then add items to localStorage
  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBack = () => {
    setStep((prev) => prev - 1);
  };
  const handleNext = () => {
    if (validation()) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validation()) {
      // setIsSubmitted(true);
      alert("Form Submitted! 🙂");
      console.log("Form Submitted", formData);
    }
  };

  // validation for step 1 & step 2
  const validation = () => {
    const stepErrors = {};
    switch (step) {
      case 1:
        if (!formData.name) stepErrors.name = "Name is required";
        if (!formData.email) stepErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email))
          stepErrors.email = "Email is invalid";
        if (!formData.phone) stepErrors.phone = "Phone is required";
        break;
      case 2:
        if (!formData.address1)
          stepErrors.address1 = "Address Line is required";
        if (!formData.city) stepErrors.city = "City is required";
        if (!formData.state) stepErrors.state = "State is required";
        if (!formData.country) stepErrors.country = "Country is required";
        if (!formData.zipCode) stepErrors.zipCode = "ZIP Code is required";
        break;
      default:
        break;
    }

    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <PersonalForm
            formData={formData}
            changeEvent={handleChange}
            errors={errors}
          />
        );
      case 2:
        return (
          <AddressForm
            formData={formData}
            changeEvent={handleChange}
            errors={errors}
          />
        );
      case 3:
        return <Confirmation formData={formData} />;

      default:
        return null;
    }
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
        {renderStep()}

        {/* navigation button */}
        <div className="buttons">
          {step > 1 && (
            <NavigationButton value="Back" clickEvent={handleBack} />
          )}
          {step < 3 && (
            <NavigationButton value="Next" clickEvent={handleNext} />
          )}
          {step === 3 && (
            <NavigationButton value="Submit" clickEvent={handleSubmit} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
