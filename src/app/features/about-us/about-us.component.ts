import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  coreValues = [
    {
      value: 'Quality',
      content:
        'We are committed to offering only the highest quality marine equipment from renowned manufacturers, ensuring the reliability and durability of our products.',
      img: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/images%2Fship.jpg?alt=media&token=bd77c7fd-9ba4-4c78-abdf-9f4a243bcac6',
    },
    {
      value: 'Integrity',
      content:
        'We uphold the highest ethical standards in all our dealings, building trust and long-lasting relationships with clients, partners, and stakeholders.',
      img: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/images%2Fship2.jpg?alt=media&token=51294e59-a56a-42e5-91b9-fc5cf59e28bf',
    },
    {
      value: 'Customer-Centric',
      content:
        'Our customers are at the heart of everything we do. We strive to understand their needs and deliver tailored solutions that exceed expectations.',
      img: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/images%2Fship3.jpg?alt=media&token=b6c48f8f-8249-4903-81e2-b6514ce4b14d',
    },
    {
      value: 'Innovation',
      content:
        'Embracing innovation drives our growth. We continuously explore new technologies and methodologies services.',
      img: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/images%2Fship4.jpg?alt=media&token=0c28cfd6-efff-4a78-95e9-f397901fac3b',
    },
    {
      value: 'Collaboration',
      content:
        'We believe in the power of collaboration and actively engage with industry partners to foster mutual growth and success.',
      img: 'https://firebasestorage.googleapis.com/v0/b/nautic-waves.appspot.com/o/images%2Fship5.jpg?alt=media&token=210b1b29-8969-40e3-a9ce-8b64ffa2326f',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
}
