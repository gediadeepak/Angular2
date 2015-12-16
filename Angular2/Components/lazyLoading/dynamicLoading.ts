import {Component} from 'angular2/angular2';
import {Register} from '../location/register'
@Component({
    selector: 'lazy-loaded',
    templateUrl: './components/lazyloading/dynamicLoading.html',
    directives: [Register]
})

export class DynamicLoading {
} 