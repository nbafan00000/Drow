import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-eeg-page',
  templateUrl: './eeg-page.component.html',
  styleUrls: ['./eeg-page.component.scss']
})
export class EegPageComponent implements OnInit {
  paymentHandler: any = null;
  paymentService: any;
  api_key: string = 'sk_test_XVb6swcroYsD8swF8MkDyZET00kthAuhxf';
  isModalOpen: boolean = false;
  orderUid: string = '';

  fields = [
    {
      id: 'firstName',
      label: "Contact Person's First Name",
      type: "text",
      value: "",
    },
    {
      id: 'lastName',
      label: "Contact Person's Last Name",
      type: "text",
      value: "",
    },
    {
      id: 'shipping_address',
      label: "Delivery Address",
      type: "text",
      value: "",
    },
    {
      id: 'pincode',
      label: "Post code",
      type: "text",
      value: "",
    },
    {
      id: 'city',
      label: "City/Place",
      type: "text",
      value: "",
    },
    {
      id: 'state',
      label: "State",
      type: "text",
      value: "",
    },
    {
      id: 'country',
      label: "Country",
      type: "text",
      value: "",
    },
    {
      id: 'contactPhone',
      label: "Phone no",
      type: "text",
      value: "",
    },
    {
      id: 'cliniemail',
      label: "Email id",
      type: "email",
      value: "",
    }
  ];

  constructor(private httpClient: HttpClient) {
    this.paymentService = new PaymentService(httpClient);
  }

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
            this.paymentService.updateOrder({
              orderupdate: {
                uid: this.orderUid,
                orderNo: stripeToken,
              }
            }).subscribe((result: any) => {
              if(result && result.status) {
                this.makePayment(400);
              } else {
                alert('An error has occured, please try again!');
              }
            })
          },
        });
      };
      window.document.body.appendChild(script);
    }
  }

  openModal() {
    this.isModalOpen = true;
  }

  onContinue() {
    const data: any = {
      product: "PENDULUM",
    };
    for(let field of this.fields) {
      data[field.id] = field.value;
    }
    this.paymentService.postOrder({
      orderdata: data
    }).subscribe((result: any) => {
      if(result && result.orderResponse) {
        this.orderUid = result.orderResponse.orderUid;
        this.makePayment(400);
      } else {
        alert('An error has occured, please try again!');
      }
    })
  }

  onClose() {
    this.isModalOpen = false;
  }
}
