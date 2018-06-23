import { HostListener, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScreenService {
    private resizeSource = new Subject<null>();
    resize$ = this.resizeSource.asObservable();

    largeBreakpoint = 800;
    screenWidth = 1000;
    screenHeigth = 800;

    constructor() {
        try {
            this.screenWidth = window.innerWidth;
            this.screenHeigth = window.innerHeight;
            window.addEventListener('resize', (event) => this.onResize(event));
        }
        catch(e) {
            // we're going with default screen dimensions
        }
    }

    isLarge() : boolean {
        return this.screenWidth >= this.largeBreakpoint;
    }

    onResize(event) : void {
        this.screenWidth = window.innerWidth;
        this.screenHeigth = window.innerHeight;
        this.resizeSource.next();
    }
}