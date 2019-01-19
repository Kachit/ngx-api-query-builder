import { HttpParams } from '@angular/common/http';

import { QueryBuilderServiceInterface } from './query-builder.interface';
import { QueryBuilderOperator } from './query-builder-operator.enum';
import { QueryBuilderField } from './query-builder-field.enum';
import { QueryBuilderOrder } from './query-builder-order.enum';

export class QueryBuilderService implements QueryBuilderServiceInterface {

    protected query: HttpParams;

    /**
     */
    constructor() {
        this.clear();
    }

    public addCondition(field: string, value: any, operator = QueryBuilderOperator.EQ): QueryBuilderServiceInterface {
        let param = QueryBuilderField.FILTER + '[' + field + '][' + operator + ']';
        this.query = this.query.set(param, value);
        return this;
    }

    public eq(field: string, value: any): QueryBuilderServiceInterface {
        return this.addCondition(field, value);
    }

    public ne(field: string, value: any): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.NE);
    }

    public gt(field: string, value: any): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.GT);
    }

    public gte(field: string, value: any): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.GTE);
    }

    public lt(field: string, value: any): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.LT);
    }

    public lte(field: string, value: any): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.LTE);
    }

    public in(field: string, value): QueryBuilderServiceInterface {
        value = value.join(',');
        return this.addCondition(field, value, QueryBuilderOperator.IN);
    }

    public nin(field: string, value): QueryBuilderServiceInterface {
        value = value.join(',');
        return this.addCondition(field, value, QueryBuilderOperator.NIN);
    }

    public search(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.SEARCH);
    }

    public limit(value: number): QueryBuilderServiceInterface {
        this.query = this.query.set(QueryBuilderField.LIMIT, value.toString());
        return this;
    }

    public offset(value: number): QueryBuilderServiceInterface {
        this.query = this.query.set(QueryBuilderField.OFFSET, value.toString());
        return this;
    }

    public order(field: string, desc = false): QueryBuilderServiceInterface {
        let order = QueryBuilderField.ORDER + '[' + field + ']';
        let type = (desc) ? QueryBuilderOrder.DESC : QueryBuilderOrder.ASC;
        this.query = this.query.set(order, type);
        return this;
    }

    public with(field: string): QueryBuilderServiceInterface {
        let include = this.query.get(QueryBuilderField.INCLUDE);
        if (include) {
            field = include + ',' + field;
        }
        this.query = this.query.set(QueryBuilderField.INCLUDE, field);
        return this;
    }

    public build(): HttpParams {
        return this.query;
    }

    public clear(): QueryBuilderServiceInterface {
        this.query = new HttpParams();
        return this;
    }
}
