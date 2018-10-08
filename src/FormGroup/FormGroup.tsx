import * as React from "react";
import { FormGroupProvider, FormGroupContext, FormGroupContextInterface } from "react-formawesome-core";

import { FormGroupProps, FormGroupPropTypes, FormGroupDefaultProps } from "./FormGroupProps";

export class FormGroup extends React.Component<FormGroupProps> {
    public static readonly propTypes = FormGroupPropTypes;
    public static readonly defaultProps = FormGroupDefaultProps;

    public render(): React.ReactNode {
        return (
            <FormGroupProvider attribute={this.props.attribute} validateOn={this.props.validateOn}>
                <FormGroupContext.Consumer>
                    {this.renderChildren}
                </FormGroupContext.Consumer>
            </FormGroupProvider>
        );
    }

    protected renderChildren = (context: FormGroupContextInterface): React.ReactNode => {
        const { attribute, validateOn, errorClassName, focusClassName, className, ...divProps } = this.props;

        return (
            <div className={this.getClassName(context)} {...divProps}>
                {this.props.children}
            </div>
        );
    }

    protected getClassName = (context: FormGroupContextInterface): string => {
        return [
            this.props.className,
            context.error && this.props.errorClassName,
            context.isFocused && this.props.focusClassName
        ].filter((className) => className).join(" ").trim();
    }
}
