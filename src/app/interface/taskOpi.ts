
export interface TaskOpi{
    id?: string;
    title: string;
    isState: number;
    priority: number;
    expirationDate:Date;
    detail:string;
}