import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Passing data to the PARENT COMPONENT FOR BINDING
  @Input('elementFromServer') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name: string;

  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;

  constructor() {
    // console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ON CHNAGES IS CALLED', changes);
  }

  ngOnInit() {
    // console.log('NGONIT Called');
    // console.log('teeexxxxt', this.header.nativeElement.textContent);
  }

  ngDoCheck() {
    // console.log('NG DO CHECK IS CALLED');
  }

  ngAfterContentInit(): void {
    // console.log(' AFTER CONTENT INIT');
    // console.log(
    //   ' AFTER CONTENT TEXT PARAGRAPH',
    //   this.paragraph.nativeElement.textContent
    // );
  }

  ngAfterContentChecked(): void {
    // console.log(' AFTER CONTENT CHECKED');
  }
  ngAfterViewInit(): void {
    // console.log(' AFTER View INIT');
    // console.log('teeexxxxt', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    // console.log(' AFTER View CHECKED');
  }

  ngOnDestroy(): void {
    // console.log('DEstry Called');
  }
}
