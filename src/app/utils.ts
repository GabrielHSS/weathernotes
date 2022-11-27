import { HttpErrorResponse } from '@angular/common/http';

export function handleError(error: unknown) {
  if (error instanceof HttpErrorResponse) {
    console.error(error.message);
  } else if (typeof error === 'string') {
    console.error(error);
  } else {
    console.error('Erro desconhecido.');
  }
}
