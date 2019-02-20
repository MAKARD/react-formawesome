import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form, FormGroup, Checkbox } from "../src";

describe("<Checkbox />", () => {
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
                <FormGroup attribute="name" >
                    <Checkbox values={["active", "disabled"]} />
                </FormGroup>
            </Form>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should add className according to context state", () => {
        const checkbox = wrapper.find(Checkbox);
        /* tslint:disable */
        expect(checkbox.instance()["getClassName"]({})).to.be.undefined;
        expect(checkbox.instance()["getClassName"]({ value: "active" })).to.equal("is-active");
        expect(checkbox.instance()["getClassName"]({ error: true })).to.equal("has-error");
        /* tslint:enable */
    });

    it("Should call props handlers", () => {
        const handlers = {
            onChange: () => handlers.changed = true,
            changed: false,
        };

        wrapper.setProps({
            children: (
                <FormGroup attribute="name" >
                    <Checkbox
                        values={["active", "disabled"]}
                        onChange={handlers.onChange}
                    />
                </FormGroup>
            )
        });

        const checkbox = wrapper.find(Checkbox);

        checkbox.simulate("change");
        expect(handlers.changed).to.be.true;
    });

    it("Should call 'nativeRef' prop as ref function", () => {
        let element;
        const nativeRef = (instance) => element = instance;

        wrapper.setProps({
            children: (
                <FormGroup attribute="name" >
                    <Checkbox values={["active", "disabled"]} nativeRef={nativeRef} />
                </FormGroup>
            )
        });

        expect(element).to.be.not.undefined;
    });

    it("Should set correct values into model", () => {
        const checkbox = wrapper.find(Checkbox);

        checkbox.simulate("change");
        expect(validator.modelValues.name).to.equal("active");

        checkbox.simulate("change");
        expect(validator.modelValues.name).to.equal("disabled");
    });
});
