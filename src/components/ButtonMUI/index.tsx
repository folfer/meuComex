import * as React from "react";
import Button from "@mui/material/Button";

import { Container, ButtonLink } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  backgroundColor: string;
  color: string;
  paddingSides: number;
  paddingTopBottom: number;
  clickFunction?: () => void;
  isLink: boolean;
  link?: string;
}

const ButtonMUI: React.FC<ButtonProps> = ({
  text,
  children,
  backgroundColor,
  color,
  paddingSides,
  paddingTopBottom,
  clickFunction,
  isLink,
  link,
  ...rest
}) => {
  const [isAlive, setIsAlive] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsAlive(!isLink);
  }, [isLink]);

  return (
    <Container
      onClick={clickFunction}
      paddingSides={paddingSides}
      paddingTopBottom={paddingTopBottom}
      color={color}
      backgroundColor={backgroundColor}
    >
      {isAlive ? (
        <Button {...rest} variant="contained" startIcon={children}>
          {text}
        </Button>
      ) : (
        <ButtonLink to={link}>
          {children}
          {text}
        </ButtonLink>
      )}
    </Container>
  );
};

export default ButtonMUI;
