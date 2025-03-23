import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { catchError, delay, finalize, map, of, Subject, takeUntil } from 'rxjs';
import { AuthorizeService } from '../../../services/authorize.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Router } from '@angular/router';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NzButtonModule, NzCheckboxModule, NzFormModule, NzInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnDestroy {

  private readonly authorizeService = inject(AuthorizeService);
  private readonly nzNotificationService = inject(NzNotificationService);
  private readonly router = inject(Router);
  private readonly fb = inject(UntypedFormBuilder);

  private readonly componentDestroy$ = new Subject<void>();

  loginForm = this.fb.group({
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  isFormSubmited = signal(false);

  submitForm() {
    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls)
        .forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });

      return;
    }

    const formValues = this.loginForm.value;

    this.isFormSubmited.set(true);
    this.authorizeService.signIn(formValues.email, formValues.password)
      .pipe(
        map(() => {
          this.nzNotificationService.success('Успешно!', 'У вовы в жопе огурец!');
          this.isFormSubmited.set(false);
          this.router.navigate(['/']);
        }),
        catchError(err => {
          this.nzNotificationService.error('Все плохо!', err.error);
          this.isFormSubmited.set(false);
          return of({});
        }),
        takeUntil(this.componentDestroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.componentDestroy$.next();
    this.componentDestroy$.complete();
  }
}
