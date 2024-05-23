import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Task1',
  standalone: true
})
export class StateTaskPipe implements PipeTransform {

  transform(state: number): string {
    switch (state) {
      case 0:
        return 'earring';
      case 1:
        return 'completed';
      default:
        return '';
    }
  }

  
}
