import {Injectable} from '@angular/core';
@Injectable() //装饰器
export class LoggerService {
  constructor() {
  }

  log(message: string) {
    console.log(message);
  }
}
