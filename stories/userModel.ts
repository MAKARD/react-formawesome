import { IsDefined, MinLength } from "react-formawesome-core/class-validator";

export class UserModel {
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
}
