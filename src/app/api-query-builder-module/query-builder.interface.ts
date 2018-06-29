import { HttpParams } from '@angular/common/http';

export interface QueryBuilderServiceInterface {

    /**
     * @param {string} field
     * @param value
     * @param {string} operator
     * @returns {QueryBuilderServiceInterface}
     */
    addCondition(field: string, value, operator): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    eq(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    ne(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    gt(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    gte(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    lt(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param value
     * @returns {QueryBuilderServiceInterface}
     */
    lte(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param {array} value
     * @returns {QueryBuilderServiceInterface}
     */
    in(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param {array} value
     * @returns {QueryBuilderServiceInterface}
     */
    nin(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param {array} value
     * @returns {QueryBuilderServiceInterface}
     */
    search(field: string, value): QueryBuilderServiceInterface;

    /**
     * @param {number} value
     * @returns {QueryBuilderServiceInterface}
     */
    limit(value: number): QueryBuilderServiceInterface;

    /**
     * @param {number} value
     * @returns {QueryBuilderServiceInterface}
     */
    offset(value: number): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @param {boolean} desc
     * @returns {QueryBuilderServiceInterface}
     */
    order(field: string, desc): QueryBuilderServiceInterface;

    /**
     * @param {string} field
     * @returns {QueryBuilderServiceInterface}
     */
    with(field: string): QueryBuilderServiceInterface;

    /**
     * @returns {HttpParams}
     */
    build(): HttpParams;

    /**
     * @returns {QueryBuilderServiceInterface}
     */
    clear(): QueryBuilderServiceInterface;
}
