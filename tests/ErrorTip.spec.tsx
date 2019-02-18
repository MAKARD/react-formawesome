import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form, FormGroup, ErrorTip } from "../src";

describe("<ErrorTip />", () => {
    let wrapper: ReactWrapper<FormProps>;
    let validator: ValidatorPublicInterface;

    beforeEach(() => {
        validator = new ModelValidator(ExampleModel, {
            name: "-",
            phone: "-",
            address: "-",
            surname: "-"
        });

        const onSubmit = () => undefined;
        onSubmit();

        wrapper = mount(
            <Form validator={validator} onSubmit={onSubmit}>
                <FormGroup attribute="phone" >
                    <ErrorTip />
                </FormGroup>
            </Form>
        );
    });

    afterEach(() => {
        wrapper.unmount();

        validator.dropToDefaults();
    });

    it("Should render error tip when error exist", () => {
        expect(wrapper.find(ErrorTip).getDOMNode()).to.be.null;

        validator.addErrors([{
            attribute: "phone",
            details: "test"
        }]);
        wrapper.find(Form).instance().forceUpdate();

        expect(wrapper.find(ErrorTip).getDOMNode().innerHTML).to.equal("test");
    });

    it("Should call children as function on error", () => {
        let rendered = false;

        const children = () => {
            rendered = true;
            return null;
        }

        validator.addErrors([{
            attribute: "phone",
            details: "test"
        }]);

        wrapper.setProps({
            children: (
                <FormGroup attribute="phone" >
                    <ErrorTip>
                        {children}
                    </ErrorTip>
                </FormGroup>
            )
        });

        expect(rendered).to.be.true;
    });
});
