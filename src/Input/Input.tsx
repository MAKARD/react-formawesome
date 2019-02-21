import * as React from "react";
import { FormGroupContext, FormGroupContextInterface as Context } from "react-formawesome-core";

import { InputProps, InputPropTypes, InputDefaultProps } from "./InputProps";

export class Input extends React.Component<InputProps> {
    public static readonly propTypes = InputPropTypes;
    public static readonly defaultProps = InputDefaultProps;

    protected unregister?: Context["unregisterElement"];

    public componentWillUnmount(): void {
        this.unregister && this.unregister();
    }

    public render(): React.ReactNode {
        return (
            <FormGroupContext.Consumer>
                {this.renderChildren}
            </FormGroupContext.Consumer>
        );
    }

    protected renderChildren = (context: Context): React.ReactNode => {
        const {
            errorClassName,
            focusClassName,
            valueClassName,
            nativeRef,
            className,
            onChange,
            onFocus,
            onBlur,
            value,
            ref,
            ...inputProps
        } = this.props;

        return (
            <input
                {...inputProps}

                onChange={this.getHandleChange(context)}
                onFocus={this.getHandleFocus(context)}
                onBlur={this.getHandleBlur(context)}

                className={this.getClassName(context)}
                ref={this.registerElement(context)}
                value={context.value || ""}
            />
        );
    };

    protected registerElement = (context: Context) => (instance?: HTMLInputElement) => {
        this.props.nativeRef && this.props.nativeRef(instance);

        if (!instance || this.unregister) {
            return;
        }

        context.registerElement(instance);

        this.unregister = context.unregisterElement;
    }

    protected getHandleChange = (context: Context) => (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.onChange && this.props.onChange(event);

        context.onChange(event.currentTarget.value);
    }

    protected getHandleBlur = (context: Context) => (event: React.FocusEvent<HTMLInputElement>): void => {
        this.props.onBlur && this.props.onBlur(event);

        context.onBlur();
    }

    protected getHandleFocus = (context: Context) => (event: React.FocusEvent<HTMLInputElement>): void => {
        this.props.onFocus && this.props.onFocus(event);

        context.onFocus();
    }

    protected getClassName = (context: Context): string => {
        return [
            this.props.className,
            context.value && this.props.valueClassName,
            context.error && this.props.errorClassName,
            context.isFocused && this.props.focusClassName
        ].filter((className) => className).join(" ").trim() || undefined;
    }
}
