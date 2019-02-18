import { expect } from "chai";
import * as React from "react";
import { mount, ReactWrapper } from "enzyme";
import { ModelValidator, ValidatorPublicInterface, FormProvider, FormProviderProps } from "react-formawesome-core";

import { ExampleModel } from "./helpers/ExampleModel";
import { UnparsedErrorContainer } from "../src";

describe("<UnparsedErrorContainer />", () => {
    let wrapper: ReactWrapper<FormProviderProps>;
    let validator: ValidatorPublicInterface;

    beforeEach(() => {
        validator = new ModelValidator(ExampleModel, {
            name: "test",
            phone: "123456789",
            address: "test 123",
            surname: "test"
        });

        const onSubmit = () => undefined;
        onSubmit();

        wrapper = mount(
            <FormProvider handleUnparsedErrors validator={validator} onSubmit={onSubmit}>
                <UnparsedErrorContainer>
                    {(error) => error}
                </UnparsedErrorContainer>
            </FormProvider>
        );
    });

    afterEach(() => {
        wrapper.unmount();
    });

    it("Should render error when unparsed error exist", () => {
        wrapper.find(FormProvider).instance().setState({
            unparsedError: "unparsed error"
        });

        expect(wrapper.find(UnparsedErrorContainer).getDOMNode().innerHTML).to.equal("unparsed error");
    });
});
