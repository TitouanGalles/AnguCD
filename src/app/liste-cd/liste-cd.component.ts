import { Component , OnInit } from '@angular/core';
import { CD } from '../models/cd.model';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-liste-cd',
  standalone: false,
  templateUrl: './liste-cd.component.html',
  styleUrl: './liste-cd.component.scss'
})
export class ListeCDComponent implements OnInit{
  listcd! : CD[];
  constructor(private myCDsService: CdsService) {}

  ngOnInit(): void {
    this.myCDsService.getCDs().subscribe((cds) => {this.listcd = cds;})
  }
}
