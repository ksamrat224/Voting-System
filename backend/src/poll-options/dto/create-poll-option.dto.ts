import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreatePollOptionDto {
    @IsNotEmpty()
    @IsString()
    name:string;
    
    @IsNotEmpty()
    @IsInt()
    pollId:number;
}
