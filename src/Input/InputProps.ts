import * as React from "react";
import PropTypes from "prop-types";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
	errorClassName?: string;
	focusClassName?: string;

	nativeRef?: (instance?: HTMLInputElement) => void;
}

export const InputPropTypes: Partial<PropTypes.ValidationMap<InputProps>> = {
	errorClassName: PropTypes.string,
	focusClassName: PropTypes.string,

	nativeRef: PropTypes.func
};

export const InputDefaultPropTypes: Partial<InputProps> = {
    errorClassName: "has-error",
    focusClassName: "has-focus"
};
