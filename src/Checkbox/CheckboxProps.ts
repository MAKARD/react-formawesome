import * as React from "react";
import * as PropTypes from "prop-types";

type Thing = number | string | boolean;

export interface CheckboxProps<A = Thing, D = Thing> extends React.HTMLProps<HTMLInputElement> {
    values: [A, D];

    errorClassName?: string;
    activeClassName?: string;

    nativeRef?: (instance?: HTMLInputElement) => void;
}

export const CheckboxPropTypes: Partial<PropTypes.ValidationMap<CheckboxProps>> = {
    values: PropTypes.arrayOf(PropTypes.any).isRequired as PropTypes.Requireable<[string, string]>,

    errorClassName: PropTypes.string,
    activeClassName: PropTypes.string,

    nativeRef: PropTypes.func
};

export const CheckboxDefaultProps: Partial<CheckboxProps> = {
    errorClassName: "has-error",
    activeClassName: "is-active"
};
