import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SchemaValidator } from "react-formawesome-core";

import { Form, FormGroup, Input, ErrorTip, SubmitButton } from "../../../src";

storiesOf("<Form>", module)
    .add("Using SchemaValidator", () => {
        const UserSchema = {
            name: "UserSchema",
            properties: {
                name: [
                    {
                        type: "minLength",
                        constraints: [4],
                        groups: ["name", "personal"]
                    },
                    {
                        type: "isDefined",
                        groups: ["name", "personal"]
                    }
                ],
                surname: [
                    {
                        type: "minLength",
                        constraints: [4],
                        groups: ["surname", "personal"]
                    },
                    {
                        type: "isDefined",
                        groups: ["surname", "personal"]
                    }
                ]
            }
        }
        const validator = new SchemaValidator(UserSchema, {
            surname: "default surname"
        });

        const handleSubmit = (modelValues) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                    action("Data has been submitted")(modelValues);
                }, 1000);
            });
        };

        return (
            <React.Fragment>
                <ReactMarkdown className="markdown" source={require("./form.withSchemaValidator.md").default} />
                <Form validator={validator} onSubmit={handleSubmit} className="form">
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
