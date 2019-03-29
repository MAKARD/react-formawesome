import * as React from "react";
import { FormGroupContext, FormGroupContextInterface as Context } from "react-formawesome-core";

import { CheckboxProps, CheckboxPropTypes, CheckboxDefaultProps } from "./CheckboxProps";

export class Checkbox<A = any, D = any> extends React.Component<CheckboxProps<A, D>> {
    public static readonly propTypes = CheckboxPropTypes;
    public static readonly defaultProps = CheckboxDefaultProps;

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
            activeClassName,
            nativeRef,
            className,
            onChange,
            checked,
            values,
            value,
            type,
            ref,
            ...checkboxProps
        } = this.props;

        const [activeValue] = values;

        return (
            <input
                {...checkboxProps}

                onChange={this.getHandleChange(context)}

                checked={activeValue === context.value}
                className={this.getClassName(context)}
                ref={this.registerElement(context)}
                value={context.value}
                type="checkbox"
            />
        );
    };

    protected registerElement = (context: Context) => (instance?: HTMLInputElement): void => {
        this.props.nativeRef && this.props.nativeRef(instance);

        if (!instance || this.unregister) {
            return;
        }

        context.registerElement(instance);

        this.unregister = context.unregisterElement;
    }

    protected getHandleChange = (context: Context) => (event: React.ChangeEvent<HTMLInputElement>): void => {
        this.props.onChange && this.props.onChange(event);

        const [activeValue, disabledValue] = this.props.values;

        context.onChange(context.value === activeValue ? disabledValue : activeValue);
    }

    protected getClassName = (context: Context): string => {
        const [activeValue] = this.props.values;

        return [
            this.props.className,
            context.error && this.props.errorClassName,
            context.value === activeValue && this.props.activeClassName
        ].filter((className) => className).join(" ").trim() || undefined;
    }
}
