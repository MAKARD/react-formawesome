import * as React from "react";
import { UnparsedErrorProvider } from "react-formawesome-core";

import { UnparsedErrorContainerProps, UnparsedErrorContainerPropTypes } from "./UnparsedErrorContainerProps";

export class UnparsedErrorContainer extends React.PureComponent<UnparsedErrorContainerProps> {
	public static readonly propTypes = UnparsedErrorContainerPropTypes;

	public render(): React.ReactNode {
		return (
			<UnparsedErrorProvider>
				{this.renderChildren}
			</UnparsedErrorProvider>
		);
	}

	protected renderChildren = (error: any): React.ReactNode => {
		const { children, ...divProps } = this.props;

		return (
			<div {...divProps}>
				{children(error)}
			</div>
		);
	}
}
