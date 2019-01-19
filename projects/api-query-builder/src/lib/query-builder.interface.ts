import { HttpParams } from '@angular/common/http';

export interface QueryBuilderServiceInterface {

    addCondition(field: string, value: any, operator: string): QueryBuilderServiceInterface;

    eq(field: string, value: any): QueryBuilderServiceInterface;

    ne(field: string, value: any): QueryBuilderServiceInterface;

    gt(field: string, value: any): QueryBuilderServiceInterface;

    gte(field: string, value: any): QueryBuilderServiceInterface;

    lt(field: string, value: any): QueryBuilderServiceInterface;

    lte(field: string, value: any): QueryBuilderServiceInterface;

    in(field: string, value: any[]): QueryBuilderServiceInterface;

    nin(field: string, value: any[]): QueryBuilderServiceInterface;

    search(field: string, value: any): QueryBuilderServiceInterface;

    limit(value: number): QueryBuilderServiceInterface;

    offset(value: number): QueryBuilderServiceInterface;

    order(field: string, desc?: boolean): QueryBuilderServiceInterface;

    with(field: string): QueryBuilderServiceInterface;

    build(): HttpParams;

    clear(): QueryBuilderServiceInterface;
}
