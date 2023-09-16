import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: any; // Define a variable to store the product details

  constructor(
    private route: ActivatedRoute,
    private apiService: ProductsService // Inject your ApiService
  ) {}

  ngOnInit(): void {
    const productIdParam = this.route.snapshot.paramMap.get('id');
    if (productIdParam !== null) {
        const productId = +productIdParam;

        if (!isNaN(productId)) {
          
            this.apiService.getProductById(productId).subscribe((data) => {
                this.product = data;
            });
        } else {
            
            console.error('Invalid product ID:', productIdParam);
        }
    } else {
       
        console.error('Product ID is missing.');
    }
}
}
