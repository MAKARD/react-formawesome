import * as React from "react";
import * as PropTypes from "prop-types";
import { FormGroupContextInterface } from "react-formawesome-core";

export interface ErrorTipProps extends React.HTMLProps<HTMLSpanElement> {
    children: React.ReactNode | ((error: FormGroupContextInterface["error"]) => React.ReactNode);
}

export const ErrorTipPropTypes: Partial<PropTypes.ValidationMap<ErrorTipProps>> = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
};
