import * as React from "react";
import * as PropTypes from "prop-types";
import { FormProviderProps, FormProviderPropTypes } from "react-formawesome-core";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type FormProps = FormProviderProps & Omit<React.HTMLProps<HTMLFormElement>, "onSubmit">;

export const FormPropTypes: Partial<PropTypes.ValidationMap<FormProps>> = FormProviderPropTypes;
