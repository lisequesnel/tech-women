import WOMEN from '../../assets/data.json';
import { Woman } from '../domain/woman';

export class Util {

  static getData(): Woman[] {
    return WOMEN;
  }

  static randomizeData(): number {
    return Math.floor((Math.random() * WOMEN.length));
  }
}
