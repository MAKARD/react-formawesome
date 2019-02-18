import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form, FormGroup, Select } from "../src";

describe("<Select />", () => {
    let wrapper: ReactWrapper<FormProps>;
    let validator: ValidatorPublicInterface;
    const options = [{
        label: "test",
        value: "test"
    }];

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
                    <Select options={options} />
                </FormGroup>
            </Form>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should add className according to context state", () => {
        const input = wrapper.find(Select);
        /* tslint:disable */
        expect(input.instance()["getClassName"]({ })).to.be.undefined;
        expect(input.instance()["getClassName"]({ isFocused: true })).to.equal("has-focus");
        expect(input.instance()["getClassName"]({ value: "test" })).to.equal("has-value");
        expect(input.instance()["getClassName"]({ error: true })).to.equal("has-error");
        /* tslint:enable */
    });

    it("Should call props handlers", () => {
        const handlers = {
            onChange: () => handlers.changed = true,
            onFocus: () => handlers.focused = true,
            onBlur: () => handlers.blured = true,
            changed: false,
            focused: false,
            blured: false
        };

        wrapper.setProps({
            children: (
                <FormGroup attribute="name" >
                    <Select
                        onChange={handlers.onChange}
                        onFocus={handlers.onFocus}
                        onBlur={handlers.onBlur}
                        options={options}
                    />
                </FormGroup>
            )
        });

        const input = wrapper.find(Select);

        input.simulate("change");
        expect(handlers.changed).to.be.true;

        input.simulate("blur");
        expect(handlers.blured).to.be.true;

        input.simulate("focus");
        expect(handlers.focused).to.be.true;
    });

    it("Should call 'nativeRef' prop as ref function", () => {
        let element;
        const nativeRef = (instance) => element = instance;

        wrapper.setProps({
            children: (
                <FormGroup attribute="name" >
                    <Select nativeRef={nativeRef} options={options} />
                </FormGroup>
            )
        });

        expect(element).to.be.not.undefined;
    });

    it("Should call children as function", () => {
        let rendered = false;
        const children = () => {
            rendered = true;
            return null;
        }

        wrapper.setProps({
            children: (
                <FormGroup attribute="name" >
                    <Select options={options}>
                        {children}
                    </Select>
                </FormGroup>
            )
        });

        expect(rendered).to.be.true;
    });
});
