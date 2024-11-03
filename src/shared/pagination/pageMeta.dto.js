"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageMetaDto = void 0;
var PageMetaDto = /** @class */ (function () {
    function PageMetaDto(_a) {
        var pageOptionsDto = _a.pageOptionsDto, itemCount = _a.itemCount;
        this.orderByColumn = pageOptionsDto.orderByColumn;
        this.page = pageOptionsDto.page;
        this.take = pageOptionsDto.take;
        this.itemCount = itemCount;
        this.pageCount = Math.ceil(this.itemCount / this.take);
        this.hasPreviousPage = this.page > 1;
        this.hasNextPage = this.page < this.pageCount;
    }
    return PageMetaDto;
}());
exports.PageMetaDto = PageMetaDto;
