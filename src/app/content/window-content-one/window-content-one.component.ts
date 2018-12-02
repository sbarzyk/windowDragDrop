import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil, skip } from 'rxjs/operators';

@Component({
  selector: 'app-window-content-one',
  templateUrl: './window-content-one.component.html',
  styleUrls: ['./window-content-one.component.scss']
})
export class WindowContentOneComponent {
  @Input() value = 'blah';

  // myForm: FormGroup = new FormGroup({
  //   firstName: new FormControl('Hans'),
  //   lastName: new FormControl('')
  // });

  // private lastNameSearchTerm: Subject<string> = new Subject<string>();

  // lastNamesSearchResult$: Observable<Array<string>> = this.lastNameSearchTerm.asObservable().pipe(
  //   debounceTime(500),
  //   switchMap(term => this.searchLastNames(term).pipe(
  //     takeUntil(this.lastNameSearchTerm.pipe(skip(1)))
  //   ))
  // );

  // private searchLastNames(term: string): Observable<Array<string>> {
  //   const allLastNames: Array<string> = ['barzyk', 'müller', 'schmidt', 'mayer', 'maier', 'zimmermann'];
  //   return of(allLastNames.filter((lastName: string) => lastName.includes(term)));
  // }

  // lastNameKeyUp(event: KeyboardEvent) {
  //   this.lastNameSearchTerm.next((event.target as any).value);
  // }
}
