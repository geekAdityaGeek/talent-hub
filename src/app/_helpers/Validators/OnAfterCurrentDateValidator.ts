import { AbstractControl, ValidatorFn } from "@angular/forms";

export function afterCurrentDate() : ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {

      if(!control.valid)  return null

      let inputDate = new Date(control.value);
      inputDate.setHours(0,0,0,0)

      let currentDate = new Date(Date.now())
      currentDate.setHours(0,0,0,0)

      if(inputDate >= currentDate){
        return { invalidDate: true }
      }
      
      return null
    };
  }