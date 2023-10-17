/* eslint-disable prettier/prettier */
import { CreateUserDTO } from "./create-user.dto";
import {PartialType} from '@nest/mapped-types';

export class UpdatePutUserDTO extends PartialType(CreateUserDTO){


 
}