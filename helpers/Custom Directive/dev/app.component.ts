import {Component} from 'angular2/core';
import {AttributeDirectives} from './attribute-directives';

@Component({
    selector: 'my-app',
    template: `
    <my-attribute-direvtives></my-attribute-direvtives>
    `,
    directives:[AttributeDirectives]
})
export class AppComponent {

}
