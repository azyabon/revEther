import * as S from "./Button.styled";
import { FC } from "react";

interface IButton {
  children: React.ReactNode;
  onClick?: any;
  style?: object;
}

const Button: FC<IButton> = ({ children, onClick, style }) => {
  return (
    <S.Button onClick={onClick} style={style}>
      {children}
    </S.Button>
  );
};

export default Button;
