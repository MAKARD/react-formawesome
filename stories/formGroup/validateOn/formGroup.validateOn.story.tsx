import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton } from "../../../src";
import { ValidateOnModel } from "../../validateOnModel";

storiesOf("<FormGroup>", module)
    .add("Validation triggers", () => {
        const handleSubmit = (modelValues) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                    action("Data has been submitted")(modelValues);
                }, 1000);
            });
        };

        const validator = new ModelValidator(ValidateOnModel, {
            name: "",
            surname: "",
            city: "",
            country: ""
        });

        const validateTriggetForCountry = (values: ValidateOnModel, errors): boolean => {
            return !!values.city && !errors.city;
        };

        return (
            <React.Fragment>
                <ReactMarkdown className="markdown" source={require("./formGroup.validateOn.md").default} />
                <Form
                    validator={validator}
                    onSubmit={handleSubmit}
                    beforeSubmit={action("Before submit")}
                    afterSubmit={action("After submit")}
                    className="form"
                >
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>validateOn="blur"</code>&nbsp;
                            This field will be validated when the user leave focus from the input
                        </p>
                        <FormGroup attribute="name" className="form-group" validateOn="blur">
                            <label className="form-label">Name</label>
                            <Input className="form-control" />
                            <ErrorTip className="form-error" />
                        </FormGroup>
                    </div>
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>validateOn="focus"</code>&nbsp;
                            This field will be validated when the user set focus on the input
                        </p>
                        <FormGroup attribute="surname" className="form-group" validateOn="focus">
                            <label className="form-label">Surname</label>
                            <Input className="form-control" />
                            <ErrorTip className="form-error" />
                        </FormGroup>
                    </div>
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>validateOn="change"</code>&nbsp;
                            This field will be validated when the user start typing
                        </p>
                        <FormGroup attribute="city" className="form-group" validateOn="change">
                            <label className="form-label">City</label>
                            <Input className="form-control" />
                            <ErrorTip className="form-error" />
                        </FormGroup>
                    </div>
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>validateOn=&#123;triggerValidationFunction&#125;</code>&nbsp;
                            This field will be validated when the user fill the "City" field without errors
                        </p>
                        <FormGroup attribute="country" className="form-group" validateOn={validateTriggetForCountry}>
                            <label className="form-label">Country</label>
                            <Input className="form-control" />
                            <ErrorTip className="form-error" />
                        </FormGroup>
                    </div>
                    <SubmitButton className="btn" loadingComponent={<span>Wait...</span>}>
                        <span>Submit</span>
                    </SubmitButton>
                </Form>
            </React.Fragment>
        );
    });
