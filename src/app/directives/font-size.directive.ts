import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from "@angular/core";
@Directive({
    selector:'[appFontSize]'
})
export class FontSizeDirective implements OnChanges{
    @Input('appFontSize') fontSize:string='16px';

    constructor(private el: ElementRef)
    {

    }
    ngOnChanges(changes: SimpleChanges): void {
        this.el.nativeElement.style.fontSize=this.fontSize;
    }
}