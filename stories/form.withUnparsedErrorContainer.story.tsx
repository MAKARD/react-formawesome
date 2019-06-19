import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton, UnparsedErrorContainer } from "../src";
import { UserModel } from "./userModel";

storiesOf("<Form>", module)
    .add("with unparsed error container", () => {
        const handleSubmit = (modelValues) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    const error = {
                        response: {
                            data: {
                                message: "A server error has been occurred. Try again later"
                            }
                        }
                    };
                    reject(error);
                    action("Error")(error);
                }, 1000);
            });
        };

        const validator = new ModelValidator(UserModel);

        const errorContainer = (error) => {
            return (error.response && error.response.data && error.response.data.message)
                || "An error hase been occurred";
        };

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
                <ReactMarkdown className="markdown" source={require("./form.withUnparsedErrorContainer.md").default} />
                <Form
                    validator={validator}
                    onSubmit={handleSubmit}
                    handleUnparsedErrors
                    errorParser={errorParser}
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
                    <UnparsedErrorContainer className="form-error-container">
                        {errorContainer}
                    </UnparsedErrorContainer>
                    <SubmitButton className="btn" loadingComponent={<span>Wait...</span>}>
                        <span>Submit</span>
                    </SubmitButton>
                </Form>
            </React.Fragment>
        );
    });
