import * as React from "react";
import { FormGroupContext, FormGroupContextInterface } from "react-formawesome-core";

import { ErrorTipProps, ErrorTipPropTypes } from "./ErrorTipProps";

export class ErrorTip extends React.Component<ErrorTipProps> {
    public static readonly propTypes = ErrorTipPropTypes;

    public render(): React.ReactNode {
        return (
            <FormGroupContext.Consumer>
                {this.renderChildren}
            </FormGroupContext.Consumer>
        );
    }

    protected renderChildren = (context: FormGroupContextInterface): React.ReactNode => {
        if (!context.error) {
            return null;
        }

        const { children, ...spanProps } = this.props;

        return typeof children === "function"
            ? children(context.error)
            : (
                <span {...spanProps}>
                    {context.error}
                </span>
            );
    }
}
