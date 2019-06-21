import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton } from "../../../src";
import { UserModel } from "../../userModel";

storiesOf("User interactive elements", module).add("<SubmitButton />", () => {
    const handleSubmit = (modelValues) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
                action("Data has been submitted")(modelValues);
            }, 1000);
        });
    };

    const validator = new ModelValidator(UserModel);

    return (
        <React.Fragment>
            <ReactMarkdown
                className="markdown"
                source={require("./userInteractiveElements.button.md").default}
            />
            <Form
                validator={validator}
                onSubmit={handleSubmit}
                beforeSubmit={action("Before submit")}
                afterSubmit={action("After submit")}
                className="form"
            >
                <FormGroup attribute="name" className="form-group" validateOn="blur">
                    <label className="form-label">Name</label>
                    <Input maxLength={4} className="form-control" />
                    <ErrorTip className="form-error" />
                </FormGroup>
                <FormGroup attribute="surname" className="form-group" validateOn="blur">
                    <label className="form-label">Surname</label>
                    <Input id="user_model-surname" className="form-control" />
                    <ErrorTip className="form-error" />
                </FormGroup>
                <SubmitButton className="btn" loadingComponent={<span>Wait...</span>}>
                    <span>Submit</span>
                </SubmitButton>
            </Form>
        </React.Fragment>
    );
});
