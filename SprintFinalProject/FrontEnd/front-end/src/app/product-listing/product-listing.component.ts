import { ProductsService } from './../products.service';
import { Router } from '@angular/router'
import { Component, OnInit } from '@angular/core';


export interface Product {
  category: string;
  name: string;
  description: string;
  image:string;
  id : number;
  price:number;
}

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css'],
})
export class ProductListingComponent implements OnInit {
  categories: string[] = [];
  selectedCategory: string | null = null;
  searchInput: string = '';
  filteredProducts: Product[] = [];
  responseData: Product[] = [];

  constructor(private ProductsService: ProductsService , private router: Router) {}
  viewProductDetails(productId: number) {
    this.router.navigate(['/detail', productId]);
    console.log('hi i cannot go');
    
  }
  filterProducts() {
    this.filteredProducts = this.responseData
      .filter(product => {
        if (this.selectedCategory) {
          return product.category === this.selectedCategory;
        }
        return true; 
      })
      .filter(product => {
        // Filter by search input
        if (this.searchInput) {
          const search = this.searchInput.toLowerCase();
          return (
            product.name.toLowerCase().includes(search) ||
            product.description.toLowerCase().includes(search)
          );
        }
        return true; 
      });
  }

  ngOnInit(): void {
    this.ProductsService
      .getProducts()
      .subscribe(
        (data: Product[]) => {
          console.log(data);
          this.responseData = data;
          this.categories = Array.from(new Set(data.map((product) => product.category)));
          this.filterProducts(); 
        },
        (error) => {
          console.log(error);
        }
      );
  }
}



