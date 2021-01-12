import { EventEmitter, OnInit } from '@angular/core';
import { Component, Input, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './paging.component.html',
    styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
    @Input() currentPage: number;
    @Input() pageCount: number;

    @Output() pageChange = new EventEmitter<number>();

    pageCountArray: number[] = [];

    ngOnInit(): void {
        for (let i = 1; i <= this.pageCount; i++) {
            this.pageCountArray.push(i);
        }
    }

    handlePageClick(page: number): void {
        this.currentPage = page;
        this.pageChange.emit(this.currentPage);
    }
}
