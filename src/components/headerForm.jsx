export const HeaderForm = ({ onClose, onSave }) => {
  return (
    <div className="w-full flex justify-between items-center px-6 py-3 font-bold text-customBlack">
      <Icon label="bx-x" onClick={onClose} />
      <h1 className="text-xl">New Contact</h1>
      <Icon label="bx-check" onClick={onSave} />
    </div>
  );
};

const Icon = ({ label, onClick }) => {
  return (
    <i
      className={`bx ${label} text-3xl cursor-pointer transform transition-transform active:scale-90`}
      onClick={onClick}
    ></i>
  );
};
