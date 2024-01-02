import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {

  public addToLocalStorage(key: string, value: any): void {
    this.addToStorage(localStorage, key, value);
  }

  public addToSessionStorage(key: string, value: any): void {
    this.addToStorage(sessionStorage, key, value);
  }


  public getFromLocalStorage(key: string): any {
    return this.getFromStorage(localStorage, key);
  }


  public getFromSessionStorage(key: string): any {
    return this.getFromStorage(sessionStorage, key);
  }


  public removeFromLocalStorage(key: string): void {
    this.removeFromStorage(localStorage, key);
  }

  public removeFromSessionStorage(key: string): void {
    this.removeFromStorage(sessionStorage, key);
  }


  public clearLocalStorage(): void {
    localStorage.clear();
  }

  public clearSessionStorage(): void {
    sessionStorage.clear();
  }

  public clearStorage(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  private addToStorage(storage: Storage, key: string, value: any): void {
    this.checkStorageKey(key);
    storage.setItem(key, JSON.stringify(value));
  }

  private getFromStorage(storage: Storage, key: string): any {
    this.checkStorageKey(key);
    const item = storage.getItem(key);

    if (item && item !== 'undefined') {
      return JSON.parse(item);
    }

    return null;
  }

  private removeFromStorage(storage: Storage, key: string): void {
    this.checkStorageKey(key);
    storage.removeItem(key);
  }

  private checkStorageKey(key: string): void {
    if (key == null || key === '') {
      throw new ReferenceError('storage key must not be null or empty');
    }
  }
}
