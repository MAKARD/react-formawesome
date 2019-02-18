import * as React from "react";
import * as PropTypes from "prop-types";

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
    errorClassName?: string;
    focusClassName?: string;
    valueClassName?: string;

    nativeRef?: (instance?: HTMLTextAreaElement) => void;
}

export const TextAreaPropTypes: Partial<PropTypes.ValidationMap<TextAreaProps>> = {
    errorClassName: PropTypes.string,
    focusClassName: PropTypes.string,
    valueClassName: PropTypes.string,
 
    nativeRef: PropTypes.func
};

export const TextAreaDefaultProps: Partial<TextAreaProps> = {
    errorClassName: "has-error",
    focusClassName: "has-focus",
    valueClassName: "has-value"
};
