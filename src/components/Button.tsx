interface ButtonProps {
  onClickButton: () => void;
  children: String;
}

export const Button = ({ onClickButton, children }: ButtonProps) => {
  return (
    <button
      className="btn btn-primary"
      onClick={onClickButton}
    >
      {children}
    </button>
  );
};
