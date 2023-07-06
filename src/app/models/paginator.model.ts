export class Paginator {

    items: number;
    entries: number;
    totalPages: number;
    currentPage: number;

    constructor(
        items: number
    ) {
        this.items = items;
        this.entries = 0;
        this.currentPage = 0;
        this.totalPages = Math.floor(this.items / this.entries);
    }

}