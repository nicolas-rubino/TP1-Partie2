import { Client } from './client';
import { Option } from './option';

export class CodeBare{
    private id:number;
    private code: string;
    private client:Client;
    private options:Array<Option>;

    constructor(){
        this.id= undefined;
        this.code= undefined;
        this.client = undefined;
    }
    
    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getCode(): string {
        return this.code;
    }

    public setCode(code: string): void {
        this.code = code;
    }

    public getClient(): Client {
        return this.client;
    }

    public setClient(client: Client): void {
        this.client = client;
    }

}