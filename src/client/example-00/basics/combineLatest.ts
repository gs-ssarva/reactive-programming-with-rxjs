import {helper} from "./helper";
import {Observable} from "rxjs";

export module combineLatest{
    let _start = false;   
    export function init(){
        let menuItem = helper.menu.replace(/\$\{NAME\}/i, "Combine Latest");
        return {
            menuItem,
            start(){
                _start = true;
                return Observable
                            .interval(1000)
                            .takeWhile(v=>_start);
            },
            stop(){
                _start = false;
            }
        };
    }
}
