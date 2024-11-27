import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent  {

  cartItems = [
    { id: 1, name: 'Tray Table', color: 'Black', price: 19.00, quantity: 2, image: 'assets/profile4.jpg' },
    { id: 2, name: 'Tray Table', color: 'Red', price: 19.00, quantity: 2, image: 'assets/profile4.jpg' },
    { id: 3, name: 'Table Lamp', color: 'Gold', price: 39.00, quantity: 1, image: 'assets/profile4.jpg' }
  ];

  selectedShipping = 'Free';
  subtotal = this.calculateSubtotal();
  total = this.calculateTotal();

  calculateSubtotal() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  calculateTotal() {
    let shippingCost = 0;
    if (this.selectedShipping === 'Express') shippingCost = 15;
    if (this.selectedShipping === 'PickUp') shippingCost = -21;
    return this.subtotal + shippingCost;
  }

  updateQuantity(item: any, change: number) {
    item.quantity += change;
    if (item.quantity < 1) item.quantity = 1;
    this.subtotal = this.calculateSubtotal();
    this.total = this.calculateTotal();
  }

  removeItem(item: any) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.subtotal = this.calculateSubtotal();
    this.total = this.calculateTotal();
  }

  checkout() {
    alert('Checkout functionality coming soon!');
  }

  currentStep = 1; // Aktif adım: 1, 2 veya 3

  setStep(step: number) {
    this.currentStep = step;
  }

}
