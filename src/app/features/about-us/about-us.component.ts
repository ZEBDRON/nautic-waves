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
      img: 'quality.png',
    },
    {
      value: 'Integrity',
      content:
        'We uphold the highest ethical standards in all our dealings, building trust and long-lasting relationships with clients, partners, and stakeholders.',
      img: 'integrity.png',
    },
    {
      value: 'Customer-Centric',
      content:
        'Our customers are at the heart of everything we do. We strive to understand their needs and deliver tailored solutions that exceed expectations.',
      img: 'customer-centric.png',
    },
    {
      value: 'Innovation',
      content:
        'Embracing innovation drives our growth. We continuously explore new technologies and methodologies services.',
      img: 'innovation.png',
    },
    {
      value: 'Collaboration',
      content:
        'We believe in the power of collaboration and actively engage with industry partners to foster mutual growth and success.',
      img: 'collaboration.png',
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
