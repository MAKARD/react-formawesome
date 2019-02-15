import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form, SubmitButton } from "../src";

describe("<SubmitButton />", () => {
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
                <SubmitButton>submit</SubmitButton>
            </Form>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should add className according to context state", () => {
        /* tslint:disable */
        expect(wrapper.find(SubmitButton).instance()["getClassName"]({ loading: true })).to.equal("is-loading");
        /* tslint:enable */
    });

    it("Should call props handlers", () => {
        let pressed = false;
        const onClick = () => pressed = true;

        wrapper.setProps({
            children: (
                <SubmitButton onClick={onClick}>submit</SubmitButton>
            )
        });

        wrapper.find(SubmitButton).simulate("click");

        expect(pressed).to.be.true;
    });

    it("Should set 'loadingComponent' when context returns loading=true", () => {
        wrapper.setProps({
            children: (
                <SubmitButton loadingComponent="loading">submit</SubmitButton>
            )
        });

        const button = wrapper.find(SubmitButton);
        button.simulate("click");

        expect(button.getDOMNode().innerHTML).to.equal("loading");
    });
});
