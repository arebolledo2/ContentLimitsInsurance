import { Content } from '@domain-model/Content';

export interface Category {
    name: string;
    contents: Content[];
}