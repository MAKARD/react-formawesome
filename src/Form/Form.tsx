import * as React from "react";
import { FormProvider } from "react-formawesome-core";

import { FormProps, FormPropTypes } from "./FormProps";

export class Form extends React.Component<FormProps> {
    public static readonly propTypes = FormPropTypes;

    public render(): React.ReactNode {
        const { onSubmit, errorParser, validator, action, ...formProps } = this.props;

        return (
            <FormProvider onSubmit={onSubmit} errorParser={errorParser} validator={validator}>
                <form {...formProps} >
                    {this.props.children}
                </form>
            </FormProvider>
        );
    }
}
