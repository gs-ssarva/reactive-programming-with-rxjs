import {helper} from "./helper";
import {Observable} from "rxjs";

export module zip{
    let _start = false;
    export function init(){
        let menuItem = helper.menu.replace(/\$\{NAME\}/i, "Zip");
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