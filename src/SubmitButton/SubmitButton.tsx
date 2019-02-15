import * as React from "react";
import { FormContext, FormContextInterface } from "react-formawesome-core";

import { SubmitButtonProps, SubmitButtonPropTypes, SubmitButtonDefaultProps } from "./SubmitButtonProps";

export class SubmitButton extends React.Component<SubmitButtonProps> {
    public static readonly propTypes = SubmitButtonPropTypes;
    public static readonly defaultProps = SubmitButtonDefaultProps;

    public render(): React.ReactNode {
        return (
            <FormContext.Consumer>
                {this.renderChildren}
            </FormContext.Consumer>
        );
    }

    protected renderChildren = (context: FormContextInterface): React.ReactNode => {
        const {
            loadingComponent,
            loadingClassName,
            className,
            onClick,
            ...buttonProps
        } = this.props;

        return (
            <button
                {...buttonProps}
                className={this.getClassName(context)}
                onClick={this.getHandleClick(context)}
            >
                {loadingComponent && context.loading ? loadingComponent : this.props.children}
            </button>
        );
    }

    protected getHandleClick = (context: FormContextInterface) =>
        (event: React.MouseEvent<HTMLButtonElement>): void => {
            this.props.onClick && this.props.onClick(event);

            !context.loading && context.onSubmit();
        }

    protected getClassName = (context: FormContextInterface): string => {
        return [
            this.props.className,
            context.loading && this.props.loadingClassName
        ].filter((className) => className).join(" ").trim() || undefined;
    }
}
