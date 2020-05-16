import { Component, OnInit, HostListener } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  fruits = [
    {
      name: 'Johan Dekkers',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05/04/2020 18:13:43')).fromNow(),
    },
    {
      name: 'Erick Manders',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05/07/2020 11:16:50')).fromNow(),
    },
    {
      name: 'Drik Makers',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05/11/2020 11:36:49')).fromNow(),
    },
    {
      name: 'Maikel steef',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05/13/2020 05:47:24')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
    {
      name: 'Elena story',
      product: 'Stofzuiger',
      amount: '1',
      price: '599',
      city: 'Amsterdam',
      date: moment(new Date('05-16-2020 00:26:19')).fromNow(),
    },
  ];

  large = false;

  constructor() {}

  ngOnInit(): void {
    if (window.screen.width > 992) {
      this.large = true;
    } else {
      this.large = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (window.screen.width > 992) {
      this.large = true;
    } else {
      this.large = false;
    }
  }
}
