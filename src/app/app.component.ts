import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs = [
        {field: 'person' },
        {headerName:'Typeof Person',field:'person', valueFormatter:params=>typeof params.value},
        {field: 'address.country' },
        {field: 'address.city'},
        {headerName:'Typeof City',field:'address.city', valueFormatter:params=>typeof params.value}
    ];

    rowData = [
        { person: 'FirstPerson', address: {country:'FirstCountry', city:'FirstCity' } },
        { person: 'SecondPerson', address: {country:'SecondCountry', city:''} },
        { person: '', address: {country:'ThirdCountry', city:'ThirdCity' } },
        { person: 'FourthPerson', address: {country:'FourthCountry', city:'FourtCity' } },
    ];

}