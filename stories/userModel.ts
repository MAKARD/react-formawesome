import {
  IsDefined,
  MinLength,
  IsNumberString,
  ValidateIf,
  Equals
} from "react-formawesome-core/class-validator";

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

  @IsNumberString({
    groups: ["phone"]
  })
  @ValidateIf((model: UserModel) => !!model.phone)
  public phone: string = undefined;

  @Equals("yes", {
    groups: ["agree"]
  })
  @ValidateIf((model: UserModel) => model.agree !== undefined, {
    groups: ["agree"]
  })
  public agree: string = undefined;

  @ValidateIf((model: UserModel) => model.gender !== undefined, {
    groups: ["gender"]
  })
  public gender: string = undefined;
}
