import "./button.scss";
import Loader from "../loader/Loader";

type Props = {
  type?:
    | "primary"
    | "secondary"
    | "primaryOutlined"
    | "primaryOutlinedBlue"
    | "secondaryOutlined"
    | "red"
    | "redOutlined";
  text: string;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  buttonType?: "button" | "reset" | "submit";
};

const Button = ({
  type,
  text,
  disabled = false,
  isLoading = false,
  onClick,
  buttonType = "submit",
  className = "",
}: Props) => {
  const getLoaderProps = () => {
    switch (type) {
      case "secondary":
        return { primary: "white", secondary: "#96cc39" };
      case "secondaryOutlined":
        return { primary: "white", secondary: "#96cc39" };
      case "red":
        return { primary: "#a33e3e", secondary: "white" };
      case "redOutlined":
        return { primary: "white", secondary: "#a33e3e" };
      default:
        return { primary: "white", secondary: "#2078cb" };
    }
  };
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`custom-button ${type} ${className}`}
      type={buttonType}
      data-cy="button"
    >
      {isLoading ? (
        <Loader size="25px" border="4px" {...getLoaderProps()} />
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
