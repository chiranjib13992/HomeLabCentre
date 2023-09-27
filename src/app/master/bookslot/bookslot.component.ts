import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bookslot',
  templateUrl: './bookslot.component.html',
  styleUrls: ['./bookslot.component.scss']
})
export class BookslotComponent {
  @Input() doctor: any;
  //7606829712
}
