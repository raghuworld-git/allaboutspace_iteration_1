import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowRight,faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';
import { AstronautService } from '../astronauts.service';
import { Subscription } from 'rxjs';
import { AstronautSimple } from '../../../common/models/astronauts/astronauts-simple.model';
import { PaginationComponent } from '../../../common/components/pagination/pagination.component';

@Component({
  selector: 'app-astronauts-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, PaginationComponent],
  templateUrl: './astronauts-list.component.html',
  styleUrl: './astronauts-list.component.scss'
})
export class AstronautsListComponent implements OnInit, OnDestroy {

  faArrowRight = faArrowRight;
  faCakeCandles = faCakeCandles;
  astroSubscripstion$!: Subscription;
  astroList: AstronautSimple[] = [];
  page = 4;


  constructor(private astroService: AstronautService) {
  }

  ngOnInit(): void {
    this.astroSubscripstion$ =
      this.astroService.getAstronautsList(8,10).subscribe({
        next: (data) => this.astroList = data.results
      });
  }

  ngOnDestroy(): void {
    this.astroSubscripstion$?.unsubscribe();
  }

}
