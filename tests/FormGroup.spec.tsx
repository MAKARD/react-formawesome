import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { FormProps, Form, FormGroup } from "../src";

describe("<FormGroup />", () => {
    let wrapper: ReactWrapper<FormProps>;
    let validator: ValidatorPublicInterface;

    beforeEach(() => {
        validator = new ModelValidator(ExampleModel, {
            name: "-",
            phone: "-",
            address: "-",
            surname: "-"
        });

        const onSubmit = async () => {
            throw new Error();
        }

        wrapper = mount(
            <Form validator={validator} onSubmit={onSubmit}>
                <FormGroup attribute="name" >
                    <div />
                </FormGroup>
            </Form>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should add className according to context state", () => {
        /* tslint:disable */
        expect(
            wrapper.find(FormGroup).instance()["getClassName"]({ isFocused: true })
        ).to.equal("is-focus");

        expect(
            wrapper.find(FormGroup).instance()["getClassName"]({ error: true })
        ).to.equal("is-error");
        /* tslint:enable */
    });
});
