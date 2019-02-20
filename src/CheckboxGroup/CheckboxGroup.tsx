import * as React from "react";
import { FormGroupContext, FormGroupContextInterface as Context } from "react-formawesome-core";

import { CheckboxGroupProps, CheckboxGroupPropTypes, CheckboxGroupDefaultProps } from "./CheckboxGroupProps";

export class CheckboxGroup extends React.Component<CheckboxGroupProps, {}> {
	public static readonly propTypes = CheckboxGroupPropTypes;
	public static readonly defaultProps = CheckboxGroupDefaultProps;

	protected items = new Map();

	constructor(props) {
		super(props);

		props.itemIds.forEach((id) => this.items.set(id, false));

		if (props.defaultActiveId !== undefined) {
			this.items.set(props.defaultActiveId, true);
		}
	}

	public render(): React.ReactNode {
		return (
			<FormGroupContext.Consumer>
				{this.renderChildren}
			</FormGroupContext.Consumer>
		);
	}

	protected renderChildren = (context: Context): React.ReactNode => {

	};
};
