import PropTypes from "prop-types";
import { useState } from "react";

const FooterToolbar = ({ onUndo, onErase, onToggleNotes, onUndoUntilCorrect, onGetRandomHint, onGetSpecificHint }) => {
  const [notesOn, setNotesOn] = useState(false);

  const toggleNotes = () => {
    setNotesOn(!notesOn);
    onToggleNotes(!notesOn); // Call the provided prop function with the updated state
  };

  return (
    <div className="fixed bottom-0 flex w-full justify-around bg-gray-800">
      <button className="w-full p-4 text-white hover:bg-gray-900" onClick={onUndo}>
        Undo
      </button>
      <button className="w-full p-4 text-white hover:bg-gray-900" onClick={onUndoUntilCorrect}>
        Undo Until Correct
      </button>
      <button className="w-full p-4 text-white hover:bg-gray-900" onClick={toggleNotes}>
        {notesOn ? "Notes On" : "Notes Off"}
      </button>
      <button className="w-full p-4 text-white hover:bg-gray-900" onClick={onGetRandomHint}>
        Random Hint
      </button>
      <button className="w-full p-4 text-white hover:bg-gray-900" onClick={onGetSpecificHint}>
        Specific Hint
      </button>
      <button className="w-full p-4 text-white hover:bg-gray-900" onClick={onErase}>
        Check Board
      </button>
    </div>
  );
};

FooterToolbar.propTypes = {
  onUndo: PropTypes.func.isRequired,
  onErase: PropTypes.func.isRequired,
  onToggleNotes: PropTypes.func.isRequired,
  onUndoUntilCorrect: PropTypes.func.isRequired,
  onGetRandomHint: PropTypes.func.isRequired,
  onGetSpecificHint: PropTypes.func.isRequired,
};

export default FooterToolbar;