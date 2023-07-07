export class Paginator {

    items: number;
    orderBy: 'id' | 'email' | 'username';
    sortBy: 'ASC' | 'DESC';
    entries: number;
    totalPages: number;
    currentPage: number;

    constructor(
        items: number = 0,
        entries: number = 0,
        currentPages: number = 0,
        sortBy: 'ASC' | 'DESC' = 'ASC',
        orderBy: 'id' | 'email' | 'username' = 'id'
    ) {
        this.items = items;
        this.entries = entries;
        this.currentPage = currentPages;
        this.totalPages = Math.floor(this.items / this.entries);
        this.totalPages += (this.totalPages * this.entries) % this.items !== 0 ? 1 : 0;
        this.orderBy = orderBy;
        this.sortBy = sortBy;
    }

}