import { IsDefined, MinLength, ValidateIf, IsNumberString } from "react-formawesome-core/class-validator";

export class ValidateOnModel {
    @IsDefined({
        groups: ["name"]
    })
    @MinLength(4, {
        groups: ["name"]
    })
    public name: string = undefined;

    @IsDefined({
        groups: ["surname"]
    })
    @MinLength(4, {
        groups: ["surname"]
    })
    public surname: string = undefined;

    @IsDefined({
        groups: ["city"]
    })
    @MinLength(4, {
        groups: ["city"]
    })
    public city: string = undefined;

    @IsDefined({
        groups: ["country"]
    })
    @MinLength(4, {
        groups: ["country"]
    })
    public country: string = undefined;
}
