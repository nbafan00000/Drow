import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit {

  testimonials = [
    {
      name: 'Anri',
      date: '22 Sep, 2022',
      title: 'Great product!',
      description: 'I absolutely LOVE this product! my productivity increased, also I had better sleep last week! so everyone preorder it right now!',
      rating: 5,
    },
    {
    },
    {
    },
  ];

  faqs = [
    {
      question: "What's the best thing about Switzerland?",
      answer: "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "This is second question of this area, and section?",
      answer: "You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      question: "Why do you never see elephants hiding in trees?",
      answer: "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
    }
  ];

  blogs = [
    {
    },
    {
    },
    {
    }
  ];

  positions = [
    {
      title: 'UI/UX Designer',
      location: 'Remote',
    },
    {
      title: 'Developer',
      location: 'Oslo',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
