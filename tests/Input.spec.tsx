import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form, FormGroup, Input } from "../src";

describe("<Input />", () => {
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
                    <Input />
                </FormGroup>
            </Form>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should add className according to context state", () => {
        const input = wrapper.find(Input);
        /* tslint:disable */
        expect(input.instance()["getClassName"]({ isFocused: true })).to.equal("has-focus");

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
                    <Input
                        onChange={handlers.onChange}
                        onFocus={handlers.onFocus}
                        onBlur={handlers.onBlur}
                    />
                </FormGroup>
            )
        });

        const input = wrapper.find(Input);

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
                    <Input nativeRef={nativeRef} />
                </FormGroup>
            )
        });

        expect(element).to.be.not.undefined;
    });
});
