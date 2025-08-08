
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskpassword'
})
export class MaskpasswordPipe implements PipeTransform {

  transform(pass: string): string {

    const last2=pass.slice(pass.length-2,pass.length);

    const size=pass.length;
    let Maskedpassword=''

    for(let i=0;i<size;i++){
      Maskedpassword=Maskedpassword+'*'
    }
    Maskedpassword=Maskedpassword+last2
     return Maskedpassword;
  }

}
