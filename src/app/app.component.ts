import { Component, inject } from '@angular/core';
import {ProfileCardComponent} from './common-ui/profile-card/profile-card.component';
import {JsonPipe} from '@angular/common';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],


  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}

