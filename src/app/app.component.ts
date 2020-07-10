import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs = [
        {headerName:'person', field: 'person' },
        {headerName:'Typeof person',field:'person', valueFormatter:params=>typeof params.value},
        {headerName:'address.city', field: 'address.city'},
        {headerName:'Typeof address.city',field:'address.city', valueFormatter:params=>typeof params.value},
        {headerName:'Address.city.toString()', field:'address.city', valueFormatter:params=>''+params.value}
    ];

    rowData = [
        { person: 'FirstPerson', address: {country:'FirstCountry', city:'FirstCity' } },
        { person: 'SecondPerson', address: {country:'SecondCountry', city:''} },
        { person: '', address: {country:'ThirdCountry', city:'ThirdCity' } },
    ];

}