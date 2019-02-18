import * as React from "react";
import * as PropTypes from "prop-types";

export interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
    errorClassName?: string;
    focusClassName?: string;
    valueClassName?: string;

    options: Array<{ value: string | number; label: string }>;

    nativeRef?: (instance?: HTMLSelectElement) => void;

    children?: (items: Array<{ value: string | number; label: string }>, selected: string | number) => React.ReactNode;
}

export const SelectPropTypes: { [P in keyof SelectProps]: PropTypes.Validator<any> } = {
    errorClassName: PropTypes.string,
    focusClassName: PropTypes.string,
    valueClassName: PropTypes.string,

    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        label: PropTypes.string.isRequired
    })).isRequired,

    children: PropTypes.func,
    nativeRef: PropTypes.func
};

export const SelectDefaultProps: Partial<SelectProps> = {
    errorClassName: "has-error",
    focusClassName: "has-focus",
    valueClassName: "has-value"
};
