import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form } from "../src";

describe("<Form />", () => {
    let wrapper: ReactWrapper<FormProps>;
    let validator: ValidatorPublicInterface;

    beforeEach(() => {
        validator = new ModelValidator(ExampleModel, {
            name: "-",
            phone: "-",
            address: "-",
            surname: "-"
        });

        const onSubmit = async () => undefined;
        onSubmit();

        wrapper = mount(
            <Form validator={validator} onSubmit={onSubmit} />
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should render form", () => {
        expect(wrapper.getDOMNode().outerHTML).to.equal("<form></form>");
    });
});
