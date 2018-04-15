import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';

@Component({
    selector:'my-attribute-direvtives',
    template:`
    <div myHighlight>
        Highlight Me
    </div>
    <br><br>
    <div [myHighlight] = "'red'">
        Another Highlight Me
    </div>

    `,
    directives:[HighlightDirective]
})
export class AttributeDirectives {

}