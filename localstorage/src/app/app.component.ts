import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = `Angular Storage Servis Kullanımı`;
  private key = 'hasan';
  private value = 'hasan';
  public label:string = '';
  public result:string = '';

  constructor(private storageService: StorageService) {}

  public addToLocalStorage(): void {
    this.storageService.addToLocalStorage(this.key, this.value);
  }

  public addToSessionStorage(): void {
    this.storageService.addToSessionStorage(this.key, this.value);
  }

  public getFromLocalStorage(): any {
    this.label = 'Get from Local Storage';
    this.result = this.storageService.getFromLocalStorage(this.key);
  }

  public getFromSessionStorage(): any {
    this.label = 'Get from Session Storage';
    this.result = this.storageService.getFromSessionStorage(this.key);
  }

  public removeFromLocalStorage(): void {
    this.storageService.removeFromLocalStorage(this.key);
  }

  public removeFromSessionStorage(): void {
    this.storageService.removeFromSessionStorage(this.key);
  }

  public clearLocalStorage(): void {
    this.storageService.clearLocalStorage();
  }

  public clearSessionStorage(): void {
    this.storageService.clearSessionStorage();
  }

  public clearStorage(): void {
    this.storageService.clearStorage();
  }
}
