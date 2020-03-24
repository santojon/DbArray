declare class DbArray<T> extends Array<T> {
    remove(val: T): DbArray<T>;
    distinct(): DbArray<T>;
    count(): number;
    orderBy(field: String, order: any, rfunc: Function): DbArray<T>;
    avg(field: String): Number;
    last(): T;
    first(): T;
    head(): DbArray<T>;
    lst(): DbArray<T>;
    tail(): DbArray<T>;
    init(): DbArray<T>;
}
export = DbArray;
