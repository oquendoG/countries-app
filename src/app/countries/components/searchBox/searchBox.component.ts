import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  templateUrl: './searchBox.component.html',
  styleUrl: './searchBox.component.css',
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  @ViewChild('textSearchInput')
  public searchterm!: ElementRef<HTMLInputElement>;

  public ngOnInit(): void {
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(400)
      )
      .subscribe(value => {
        this.onDebounce.emit(this.searchterm.nativeElement.value);
      })
    }

    ngOnDestroy(): void {
      this.debouncerSubscription?.unsubscribe();
    }

  public onKeyPress(): void {
    this.debouncer.next(this.searchterm.nativeElement.value);
  }
}
