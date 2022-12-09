import { Component, Input } from '@angular/core';
import { INews } from 'src/app/interfaces/news';

@Component({
  selector: 'newstab',
  templateUrl: './newstab.component.html',
  styleUrls: ['./newstab.component.css'],
})
export class NewstabComponent {
  @Input() article!: INews;
}
