import { useState } from "react";
import Form from "../Form/Form.jsx";

const ActionCard = ({ onAdd }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(true);
  };

  return (
    <div className="card">
      <h2>Update Today's Progress</h2>
      <button onClick={handleToggle}>+ Add data</button>

      {open && (
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Form title="What Did You Do Today?" setIsOpen={setOpen} onAdd={onAdd} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionCard;
