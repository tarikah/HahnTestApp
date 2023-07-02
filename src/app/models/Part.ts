export interface GetPartResponse{
    id:number;
    name:string;
    composition:string;
    serialNumber:string;
    madeOn:Date;
    validTill:string;
    manufacturerName:string;
    partTypeName:string;
    isAvailable:boolean;
    brandNames:string[];
    brandNamesAsString:string;
}
export interface AddUpdatePartRequest{
    id:number;
    name:string;
    composition:string;
    serialNumber:string;
    manufacturerId:number;
    partTypeId:number;
    brands:number[];
    totalQuantity:number;
}