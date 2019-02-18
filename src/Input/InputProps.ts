import * as React from "react";
import * as PropTypes from "prop-types";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    errorClassName?: string;
    focusClassName?: string;
    valueClassName?: string;

    nativeRef?: (instance?: HTMLInputElement) => void;
}

export const InputPropTypes: Partial<PropTypes.ValidationMap<InputProps>> = {
    errorClassName: PropTypes.string,
    focusClassName: PropTypes.string,
    valueClassName: PropTypes.string,

    nativeRef: PropTypes.func
};

export const InputDefaultProps: Partial<InputProps> = {
    errorClassName: "has-error",
    focusClassName: "has-focus",
    valueClassName: "has-value"
};
