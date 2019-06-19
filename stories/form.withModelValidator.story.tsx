import * as React from "react";

import ReactMarkdown from "react-markdown";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { ModelValidator } from "react-formawesome-core";
import { IsDefined, MinLength } from "react-formawesome-core/class-validator";

import { Form, FormGroup, Input, ErrorTip, SubmitButton } from "../src";

storiesOf("<Form>", module)
    .add("with model validator", () => {
        class UserModel {
            @IsDefined({
                groups: ["name"]
            })
            @MinLength(4, {
                groups: ["name"]
            })
            public name: string = undefined;

            @IsDefined({
                groups: ["name"]
            })
            @MinLength(4, {
                groups: ["name"]
            })
            public surname: string = undefined;
        }

        const validator = new ModelValidator(UserModel, {
            name: "default name"
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
                <ReactMarkdown className="markdown" source={require("./form.withModelValidator.md").default} />
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
