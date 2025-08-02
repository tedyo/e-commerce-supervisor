import "./loader.scss";

type Props = {
  size?: string;
  border?: string;
  primary?: string;
  secondary?: string;
};

const Loader = ({ size, border, primary, secondary }: Props) => {
  return (
    <span
      className="loader"
      data-cy="loader"
      style={{
        width: size || "30px",
        height: size || "30px",
        borderWidth: border || "4px",
        borderColor: secondary || "#eff8ff",
        borderBottomColor: primary || "#0266c4",
      }}
    ></span>
  );
};

export default Loader;
