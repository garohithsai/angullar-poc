export interface FormLinkageModel {
    number: number;
    name: string;
    editionDate: String;
    fillinStatus: string;
    fillingType: string;
    formCategory: string;
    guideline: string;
    complexLinkage: string;
    excluded?: boolean;
    detailedColumn?: Array<any>;
}
