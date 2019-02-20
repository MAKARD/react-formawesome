import * as PropTypes from "prop-types";

export interface CheckboxGroupProps {
	readonly itemIds: Array<number | string>;
	readonly defaultActiveId?: number | string;
}

export const CheckboxGroupPropTypes: Partial<PropTypes.ValidationMap<CheckboxGroupProps>> = {
	itemIds: PropTypes.arrayOf(PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	]).isRequired).isRequired,
	defaultActiveId: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number
	])
};

export const CheckboxGroupDefaultProps: Partial<CheckboxGroupProps> = {
};
