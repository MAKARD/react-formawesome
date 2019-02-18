import * as PropTypes from "prop-types";
import { FormGroupProviderProps, FormGroupProviderPropTypes } from "react-formawesome-core";

export interface FormGroupProps extends FormGroupProviderProps, React.HTMLProps<HTMLDivElement> {
    focusClassName?: string;
    errorClassName?: string;
    valueClassName?: string;
}

export const FormGroupPropTypes: Partial<PropTypes.ValidationMap<FormGroupProps>> = {
    errorClassName: PropTypes.string,
    focusClassName: PropTypes.string,
    valueClassName: PropTypes.string,

    ...FormGroupProviderPropTypes
};

export const FormGroupDefaultProps = {
    errorClassName: "is-error",
    focusClassName: "is-focus",
    valueClassName: "have-value"
};
