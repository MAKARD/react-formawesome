import * as PropTypes from "prop-types";
import { UnparsedErrorProviderProps } from "react-formawesome-core";

export type UnparsedErrorContainerProps = React.HTMLProps<HTMLDivElement> & UnparsedErrorProviderProps;

export const UnparsedErrorContainerPropTypes: Partial<PropTypes.ValidationMap<UnparsedErrorContainerProps>> = {
	children: PropTypes.func.isRequired
};
