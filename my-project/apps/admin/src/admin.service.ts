import { Injectable } from '@nestjs/common';
var printf = require('printf');
var out = printf('%05d', 42)
@Injectable()
export class AdminService {
  getHello(): string {
    return 'Hello World!' + out;
  }
}
