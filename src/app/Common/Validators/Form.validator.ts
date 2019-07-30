import { AbstractControl, ValidationErrors } from '@angular/forms';


export class CustomFormValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") !== -1)
            return {
                cannotContainSpace: true
            }
        return null
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "chenna")
                    resolve({ shouldBeUnique: true })
                else
                    resolve(null)
            }, 2000)
        });
    }
    static passWordMatch(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "chenna")
                    resolve({ passWordMatch: true })
                else
                    resolve(null)
            }, 2000)
        })
    }
}