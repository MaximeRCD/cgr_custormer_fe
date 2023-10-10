import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Research } from './research-data';
import { ResarchApiService } from './resarch-api.service';

@Component({
  selector: 'app-customer-research-list',
  templateUrl: './customer-research-list.component.html',
  styleUrls: ['./customer-research-list.component.css']
})
export class CustomerResearchListComponent implements OnInit {

  id: string | null = null;

  list_researches: Research[] = []

  constructor(private route: ActivatedRoute,
    private research_api: ResarchApiService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    if (this.id) {
      this.research_api.readResearch(this.id).subscribe(
        resultat => (this.list_researches = resultat),
        error => console.error('Error loading clients', error))
    }
  }
}