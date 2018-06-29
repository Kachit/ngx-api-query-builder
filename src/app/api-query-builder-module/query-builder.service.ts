import { HttpParams } from '@angular/common/http';

import { QueryBuilderServiceInterface } from './query-builder.interface';
import { QueryBuilderOperator } from './query-builder-operator.enum';
import { QueryBuilderField } from './query-builder-field.enum';
import { QueryBuilderOrder } from './query-builder-order.enum';

export class QueryBuilderService implements QueryBuilderServiceInterface {

    /**
     * @type {HttpParams}
     */
    protected query: HttpParams;

    /**
     */
    constructor() {
        this.clear();
    }

    /**
     * @param {string} field
     * @param value
     * @param {string} operator
     * @returns {QueryBuilderServiceInterface}
     */
    public addCondition(field: string, value, operator = QueryBuilderOperator.EQ): QueryBuilderServiceInterface {
        let param = QueryBuilderField.FILTER + '[' + field + '][' + operator + ']';
        this.query = this.query.set(param, value);
        return this;
    }

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    public eq(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value);
    }

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    public ne(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.NE);
    }

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    public gt(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.GT);
    }

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    public gte(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.GTE);
    }

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    public lt(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.LT);
    }

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    public lte(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.LTE);
    }

    /**
     * @param {string} field
     * @param {array} value
     * @returns {QueryBuilderServiceInterface}
     */
    public in(field: string, value): QueryBuilderServiceInterface {
        value = value.join(',');
        return this.addCondition(field, value, QueryBuilderOperator.IN);
    }

    /**
     * @param {string} field
     * @param {array} value
     * @returns {QueryBuilderServiceInterface}
     */
    public nin(field: string, value): QueryBuilderServiceInterface {
        value = value.join(',');
        return this.addCondition(field, value, QueryBuilderOperator.NIN);
    }

    /**
     * @param {string} field
     * @param {array} value
     * @returns {QueryBuilderServiceInterface}
     */
    public search(field: string, value): QueryBuilderServiceInterface {
        return this.addCondition(field, value, QueryBuilderOperator.SEARCH);
    }

    /**
     * @param {number} value
     * @returns {QueryBuilderServiceInterface}
     */
    public limit(value: number): QueryBuilderServiceInterface {
        this.query = this.query.set(QueryBuilderField.LIMIT, value.toString());
        return this;
    }

    /**
     * @param {number} value
     * @returns {QueryBuilderServiceInterface}
     */
    public offset(value: number): QueryBuilderServiceInterface {
        this.query = this.query.set(QueryBuilderField.OFFSET, value.toString());
        return this;
    }

    /**
     * @param {string} field
     * @param {boolean} desc
     * @returns {QueryBuilderServiceInterface}
     */
    public order(field: string, desc = false): QueryBuilderServiceInterface {
        let order = QueryBuilderField.ORDER + '[' + field + ']';
        let type = (desc) ? QueryBuilderOrder.DESC : QueryBuilderOrder.ASC;
        this.query = this.query.set(order, type);
        return this;
    }

    /**
     * @param {string} field
     * @returns {QueryBuilderServiceInterface}
     */
    public with(field: string): QueryBuilderServiceInterface {
        let include = this.query.get(QueryBuilderField.INCLUDE);
        if (include) {
            field = include + ',' + field;
        }
        this.query = this.query.set(QueryBuilderField.INCLUDE, field);
        return this;
    }

    /**
     * @returns {HttpParams}
     */
    public build(): HttpParams {
        return this.query;
    }

    /**
     * @returns {QueryBuilderServiceInterface}
     */
    public clear(): QueryBuilderServiceInterface {
        this.query = new HttpParams();
        return this;
    }
}
