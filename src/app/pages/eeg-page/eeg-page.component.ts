import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eeg-page',
  templateUrl: './eeg-page.component.html',
  styleUrls: ['./eeg-page.component.scss']
})
export class EegPageComponent implements OnInit {
  paymentHandler: any = null;
  api_key: string = 'sk_test_XVb6swcroYsD8swF8MkDyZET00kthAuhxf';
  constructor() { }

  ngOnInit(): void {
    this.invokeStripe();
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.api_key,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'EEG Headset',
      description: "Drowzee's Pendulum Sleep Kit",
      amount: amount * 100,
    });
  }
  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.api_key,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }
}
