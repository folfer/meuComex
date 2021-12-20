/* eslint-disable jsx-a11y/label-has-associated-control */
import { Field, FieldProps } from "formik";
import React, {
  InputHTMLAttributes,
  ReactElement,
  useEffect,
  useState,
} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { IconType } from "react-icons/lib";
import InputMask from "react-text-mask";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  name: string;
  error?: string;
  date?: Date;
  dateSetter?: (date: Date) => void;
  initialDate?: Date;
  touched?: boolean;
  icon?: IconType;
  value?: string | number;
  className?: string;
  mask?: string[] | (string | RegExp)[];
  defaultValue?: string;
  textarea?: boolean;
}

export const Input: React.FC<InputProps> = ({
  title,
  error,
  touched,
  value,
  className,
  icon: Icon,
  mask,
  children,
  date,
  dateSetter,
  initialDate,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsError(!!error && !!touched);
  }, [error, touched]);

  const handleFocused = (): void => {
    setIsFocused(true);
  };

  const handleBlur = (): void => {
    setIsFocused(false);
    setIsFilled(!!value);
  };

  const returnFieldComponent = (): ReactElement => {
    if (mask) {
      return (
        <Field data-testid="input-item" {...rest}>
          {({ field }: FieldProps) => (
            <InputMask {...field} {...rest} mask={mask} />
          )}
        </Field>
      );
    }

    if (rest.type === "textarea") {
      return <Field as="textarea" data-testid="input-item" {...rest} />;
    }

    if (rest.type === "date") {
      return (
        <Field data-testid="input-item" {...rest}>
          {({ field }: FieldProps) => (
            <>
              {dateSetter && (
                <DatePicker
                  {...field}
                  minDate={initialDate}
                  dateFormat="dd/MM/yyyy"
                  selected={date}
                  onChange={(newDate: Date) => dateSetter(newDate)}
                />
              )}
            </>
          )}
        </Field>
      );
    }

    if (rest.type === "select") {
      return (
        <>
          <Field as="select" data-testid="input-item" {...rest}>
            {children}
          </Field>

          <div className="arrow-select">
            <IoIosArrowDown size={22} />
          </div>
        </>
      );
    }

    return <Field data-testid="input-item" {...rest} />;
  };

  return (
    <Container
      isFocused={isFocused}
      isFilled={isFilled}
      isError={isError}
      onBlur={handleBlur}
      onFocus={handleFocused}
      className={className}
    >
      <h3 data-testid="input-title">{title}</h3>

      <label data-testid="input-label">
        {returnFieldComponent()}

        {Icon && (
          <span>
            <Icon />
          </span>
        )}
      </label>

      {isError && <span className="error">{error}</span>}
    </Container>
  );
};
