import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton } from "../src";
import { UserModel } from "./userModel";

storiesOf("<Form>", module)
    .add("with error parser", () => {
        const handleSubmit = (modelValues) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const error = {
                        response: {
                            data: {
                                errors: [
                                    {
                                        field: "name",
                                        message: `Name "${modelValues.name}" already exist`
                                    }
                                ]
                            }
                        }
                    };

                    reject(error);
                    action("Error")(error);
                }, 1000);
            });
        };

        const validator = new ModelValidator(UserModel);

        const errorParser = (error) => {
            if (Array.isArray(error.response.data.errors)) {
                return error.response.data.errors.map(({ field, message }) => ({
                    attribute: field,
                    details: message
                }));
            }

            return error;
        };

        return (
            <React.Fragment>
                <ReactMarkdown className="markdown" source={require("./form.withErrorParser.md").default} />
                <Form
                    validator={validator}
                    onSubmit={handleSubmit}
                    className="form"
                    errorParser={errorParser}
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
                    <SubmitButton className="btn" loadingComponent={<span>Wait...</span>}>
                        <span>Submit</span>
                    </SubmitButton>
                </Form>
            </React.Fragment>
        );
    });
