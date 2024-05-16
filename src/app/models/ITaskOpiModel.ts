import { Priority } from "../enum/priority";
import { State } from "../enum/state";

export interface ITaskOpiModel{
    id?: string;
    userId: string;
    title: string;
    isState: State;
    priority: Priority;
    expirationDate:Date;
}