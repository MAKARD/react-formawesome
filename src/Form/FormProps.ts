import * as React from "react";
import * as PropTypes from "prop-types";
import { FormProviderProps, FormProviderPropTypes } from "react-formawesome-core";

export type FormProps = FormProviderProps & React.HTMLProps<HTMLFormElement>;

export const FormPropTypes: Partial<PropTypes.ValidationMap<FormProps>> = FormProviderPropTypes;
