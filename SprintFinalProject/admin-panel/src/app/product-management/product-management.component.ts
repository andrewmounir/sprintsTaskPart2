import { ProductService } from './../products.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent {
  productName: string = '';
  productTitle: string = '';
  productPrice: number = 0;
  productDescription: string = '';
  productCategory:string = '';
  products: any[] = []; // Initialize an empty array to store products
  showProductForm = false; // Add a flag to control the display of the product form
  showProductList = true; // Add a flag to control the display of the product list
  selectedImage: File | null = null; // Track the selected image file
  constructor(private ProductService: ProductService , private snackBar: MatSnackBar) {} // Inject the product service
  onImageSelected(event: any) {
    // Get the selected image file
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedImage = fileList[0];
    }
  }
  ngOnInit() {
    // Fetch the list of products when the component initializes
    this.fetchProducts();
  }
  onSubmit() {
 
    const productData = new FormData();
    if (this.selectedImage) {
      productData.append('image', this.selectedImage, this.selectedImage.name);
  }
    // Prepare the data to send to the product service for adding a product
    productData.append('category',this.productCategory);
    productData.append('name', this.productName);
    productData.append('title', this.productTitle);
    productData.append('price', String(this.productPrice));
    productData.append('description', this.productDescription);

    // Call a method in the product service to add the product
    this.ProductService.addProduct(productData).subscribe(
      (response) => {
        // Handle the response if needed
        console.log('Product added:', response);
        // Clear the form fields after successful submission
        this.clearForm();
        this.snackBar.open('Product added successfully!', 'Dismiss', {
          duration: 3000, // Duration in milliseconds (3 seconds in this case)
          horizontalPosition: 'center', // Position the snackbar at the center of the screen
          verticalPosition: 'top', // Position the snackbar at the top
        });
        
      },



      
      (error) => {
        // Handle errors if needed
        console.error('Error adding product:', error);
      }
    );
  }
  fetchProducts() {
    // Make a GET request to fetch the products from the backend
    this.ProductService.getProducts().subscribe(
      (response: any) => {
        // Assign the fetched products to the products array
        this.products = response;
      },
      (error) => {
        // Handle errors if needed
        console.error('Error fetching products:', error);
      }
    );
  }

  toggleProductForm() {
    // Toggle the display of the product form and product list
    this.showProductForm = !this.showProductForm;
    this.showProductList = !this.showProductList;
    console.log(this.productDescription);
    
  }
  clearForm() {
    // Clear all form fields
    this.productName = '';
    this.productTitle = '';
    this.productPrice = 0;
    this.productDescription = '';
  }
}
