import * as React from "react";
import * as PropTypes from "prop-types";

export interface SubmitButtonProps extends React.HTMLProps<HTMLButtonElement> {
	loadingClassName?: string;

	loadingComponent?: React.ReactNode;
}

export const SubmitButtonPropTypes: Partial<PropTypes.ValidationMap<SubmitButtonProps>> = {
	loadingClassName: PropTypes.string,

	loadingComponent: PropTypes.element
};

export const SubmitButtonDefaultProps: Partial<SubmitButtonProps> = {
	loadingClassName: "is-loading"
};
