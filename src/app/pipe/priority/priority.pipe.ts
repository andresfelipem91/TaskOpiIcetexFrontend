import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityTask',
  standalone: true
})
export class PriorityPipe implements PipeTransform {

  transform(priority: number ): string {
    switch (priority) {
      case 0:
        return 'high';
      case 1:
        return 'half';
      case 2:
        return   'low';
        default:
          return  '';
  }
  }
}
