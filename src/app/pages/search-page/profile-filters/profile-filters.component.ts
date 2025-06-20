import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {serveWebpackBrowser} from '@angular-devkit/build-angular/src/builders/dev-server/webpack-server';
import {ProfileService} from '../../../data/services/profile.service';
import {debounceTime, startWith, switchMap} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-profile-filters',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './profile-filters.component.html',
  styleUrl: './profile-filters.component.scss'
})
export class ProfileFiltersComponent {
  fd = inject(FormBuilder);
  profileService = inject(ProfileService);

  searchForm = this.fd.group({
    firstName: [''],
    lastName: [''],
    stack: [''],
  })

  constructor() {
    this.searchForm.valueChanges
      .pipe (
        startWith({}),
        debounceTime(300),
        switchMap ( formValue => {
          return this.profileService.filterProfiles(formValue)
    }),
        takeUntilDestroyed()
      )
      .subscribe()
  }
}
