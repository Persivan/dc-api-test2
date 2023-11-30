import { Component } from '@angular/core';

declare var DCLoans: (
  partnerID: string,
  method: string,
  data: any,
  callback: (result: any) => any,
  debug: string
  ) => any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dc-api-test2';

  debug = 'true';
  partnerID = '491227843';
  codeTT = '500224651';

  arrProducts = [
    {id: '2515', price: '65990', count: '1', type: 'Ноутбуки', name: 'Lenovo ThinkPad X1 Carbon Touch' },
    {id: '743', price: '24680', count: '1', type: 'Мобильные телефоны',name: 'Apple iPhone 5 Black 32Gb' },
    {id: '1306', price: '5910.15', count: '2', type: 'Бытовая техника', name: 'Gorenje GMO25DGE' }
  ]



  delProduct() {
    let debug = this.debug;
    let partnerID = this.partnerID;

    DCLoans(partnerID, 'delProduct', false, function(result){
      console.log('Очистка корзины, result:', result)
    }, debug);
  }

  addProduct() {
    let debug = this.debug;
    let partnerID = this.partnerID;
    let arrProducts = this.arrProducts;

    DCLoans(partnerID, 'addProduct',  { products : arrProducts }, function(result){
      console.log('Добавление товаров, result:', result)
    }, debug);
  }


  createWidget() {
    let debug = this.debug;
    let partnerID = this.partnerID;
    let codeTT = this.codeTT;

    DCLoans(partnerID, 'saveOrder', { order : '123', phone: '9161234567', codeTT: codeTT }, function(result){
      console.log('Создание виджета, result:', result)
      }, debug);
  }

  methodFromDocumentation() {
    let debug = this.debug;
    let partnerID = this.partnerID;
    let arrProducts = this.arrProducts;
    let codeTT = this.codeTT;

    DCLoans(partnerID, 'delProduct', false, function(result){
      if (result.status == true) {
        DCLoans(partnerID, 'addProduct', { products : arrProducts }, function(result){
          if (result.status == true) {
            DCLoans(partnerID, 'saveOrder', { order : '123', phone: '9161234567', codeTT: codeTT },
              function(result){
                console.log('Создание виджета, result:', result)
              }, debug);
          }
        }, debug);
      }
    }, debug);
  }




}
