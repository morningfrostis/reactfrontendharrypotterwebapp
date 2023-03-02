import { FC } from "react";
import { Props } from "./types";
import { CustomButton } from "./styles";
const Button: FC<Props> = ({ children, disabled, onClick }) => {
  return (
    <CustomButton onClick={onClick} disabled={disabled}>
      {children}
    </CustomButton>
  );
};
export default Button;
