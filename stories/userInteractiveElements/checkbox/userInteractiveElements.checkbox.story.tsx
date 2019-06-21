import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton, Checkbox } from "../../../src";
import { UserModel } from "../../userModel";

storiesOf("User interactive elements", module)
    .add("<Checkbox />", () => {
        const handleSubmit = (modelValues) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                    action("Data has been submitted")(modelValues);
                }, 1000);
            });
        };

        const validator = new ModelValidator(UserModel, {
            agree: "no"
        });

        return (
            <React.Fragment>
                <ReactMarkdown className="markdown" source={require("./userInteractiveElements.checkbox.md").default} />
                <Form
                    validator={validator}
                    onSubmit={handleSubmit}
                    beforeSubmit={action("Before submit")}
                    afterSubmit={action("After submit")}
                    className="form"
                >
                    <FormGroup attribute="name" className="form-group" validateOn="blur">
                        <label className="form-label">Name</label>
                        <Input className="form-control" />
                        <ErrorTip className="form-error" />
                    </FormGroup>
                    <FormGroup attribute="surname" className="form-group" validateOn="blur">
                        <label className="form-label">Surname</label>
                        <Input className="form-control" />
                        <ErrorTip className="form-error" />
                    </FormGroup>
                    <FormGroup attribute="agree" className="form-group form-group-inline" validateOn="blur">
                        <Checkbox id="checkbox" values={["yes", "no"]} className="form-control checkbox" />
                        <label htmlFor="checkbox" className="form-label">I agree with any terms</label>
                    </FormGroup>
                    <SubmitButton className="btn" loadingComponent={<span>Wait...</span>}>
                        <span>Submit</span>
                    </SubmitButton>
                </Form>
            </React.Fragment>
        );
    });
