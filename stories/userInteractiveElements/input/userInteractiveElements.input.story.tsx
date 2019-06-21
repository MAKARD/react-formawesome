import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton } from "../../../src";
import { UserModel } from "../../userModel";

storiesOf("User interactive elements", module)
    .add("<Input />", () => {
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
                <ReactMarkdown className="markdown" source={require("./userInteractiveElements.input.md").default} />
                <Form
                    validator={validator}
                    onSubmit={handleSubmit}
                    beforeSubmit={action("Before submit")}
                    afterSubmit={action("After submit")}
                    className="form"
                >
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>Html property 'maxLength'</code>&nbsp;
                            This field does not allow to type more than 4 symbols
                        </p>
                        <FormGroup attribute="name" className="form-group" validateOn="blur">
                            <label className="form-label">Name</label>
                            <Input maxLength={4} className="form-control" />
                            <ErrorTip className="form-error" />
                        </FormGroup>
                    </div>
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>Html property 'id'</code>&nbsp;
                            This field have an id. So you can&nbsp;
                            <label htmlFor="user_model-surname">click here</label> to focus on it.
                        </p>
                        <FormGroup attribute="surname" className="form-group" validateOn="blur">
                            <label className="form-label">Surname</label>
                            <Input id="user_model-surname" className="form-control" />
                            <ErrorTip className="form-error" />
                        </FormGroup>
                    </div>
                    <div className="form-group-wrap">
                        <p className="form-group-description">
                            <code>Html property 'type'</code>&nbsp;
                            This field allow only digits to fill.
                        </p>
                        <FormGroup attribute="phone" className="form-group" validateOn="blur">
                            <label className="form-label">Phone</label>
                            <Input type="number" className="form-control" />
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
