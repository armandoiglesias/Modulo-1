import { Component} from '@angular/core';

@Component({
  selector: 'app-body'
  , templateUrl: 'body.component.html'
})

export class BodyComponent{
  frase:any = {
  mensaje : 'un gran poder requiere una gran respponsa'
  , autor : 'Stan Lee'
}

  mostrar:boolean = false;

  personajes:string[] = ['Spiderman' ,'Venom', 'X']

  

}
