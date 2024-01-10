export interface IResponse{
    result: string;
    content: IComputer;
}

export interface IComputer{
    id?: number;
    name?: string;
    description?: string;
    activationUrl?: string;
    deactivationUrl?: string;
    statusUrl?: string;
    authHeader?: string;
    inProcess: boolean;
    externalId: string;
}