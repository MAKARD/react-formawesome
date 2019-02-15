import * as React from "react";
import { FormProvider } from "react-formawesome-core";

import { FormProps, FormPropTypes } from "./FormProps";

export class Form extends React.Component<FormProps> {
    public static readonly propTypes = FormPropTypes;

    public render(): React.ReactNode {
        const {
            action,
            onSubmit,
            validator,
            errorParser,
            afterSubmit,
            beforeSubmit,
            handleUnparsedErrors,
            ...formProps
        } = this.props;

        return (
            <FormProvider
                onSubmit={onSubmit}
                validator={validator}
                errorParser={errorParser}
                afterSubmit={afterSubmit}
                beforeSubmit={beforeSubmit}
                handleUnparsedErrors={handleUnparsedErrors}
            >
                <form {...formProps} >
                    {this.props.children}
                </form>
            </FormProvider>
        );
    }
}
