import { ExampleEnum } from "./enum/ExampleEnum";

export interface ExampleDomain {
    id: string;
    someEnum: ExampleEnum;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}