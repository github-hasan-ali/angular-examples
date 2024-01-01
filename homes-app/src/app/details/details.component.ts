import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
<article>
  <img [src]="housingLocation?.photo" alt="" class="listing-photo">
  <section class="listing-description">
    <h2 class="listing-heading">{{housingLocation?.name}}</h2>
    <p class="listing-location">{{housingLocation?.city}}</p>
  </section>
  <section class="listing-features">
    <h2 class="section-heading">About this housing location</h2>
    <ul>
      <li>Units available: {{housingLocation?.availableUnits}}</li>
      <li>Does this location have wifi: {{housingLocation?.wifi}} </li>
      <li>Does this location have laundry: {{housingLocation?.laundry}} </li>
    </ul>
  </section>
  <section class="listing-apply">
    <h2 class="section-heading">Apply for this location</h2>
    <form [formGroup]="applyForm" (submit)="submitApplication()">
      <label for="firstName">First name</label>
      <input type="text" id="firstName" formControlName="firstName">
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" formControlName="lastName">
      <label for="email">Email</label>
      <input type="email" id="email" formControlName="email">
      <button class="primary" type="submit">Apply Now</button>
    </form>
  </section>
</article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute=inject(ActivatedRoute);
  housingService: HousingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  constructor(){
   const housingLocationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingService.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication(){
   this.housingService.submitApplication(
    this.applyForm.value.firstName ?? '',
    this.applyForm.value.lastName ?? '',
    this.applyForm.value.email ?? '',
    )
  }
}
