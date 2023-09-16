<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\Storage; 
use Psy\Readline\Hoa\Console;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
     
        
        if ($request->input('image')) {
            $img = $request->input('image');
            $image_parts = explode(";base64,", $img);
            $image_type_aux = explode("image/", $image_parts[0]);
            $image_type = $image_type_aux[1];
            $image_base64 = base64_decode($image_parts[1]);
            $file = "images/" . uniqid() . '.' . $image_type;
        
            $imagePath = public_path($file);
        
            file_put_contents($imagePath, $image_base64);
                }




        
    
        else {
         

        
            $imagePath = null;
        }

        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('public/image'); 
            $imagePath = Storage::url($imagePath);
        } else {
            $imagePath = null; 
        }
        $product = Product::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'stock' => $request->input('stock'),
            'image' => $imagePath, 
            'category' => $request->input('category'),
            'status' => $request->input('status', true), 
        ]);

        return response()->json($product, 201);
    }

    // Update a product
    public function update(Request $request, Product $product)
    {
      
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric|min:0',
            'stock' => 'required|integer|min:0',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', 
            'category' => 'required',
            'status' => 'boolean',
        ]);

       
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('images'); 
            if ($product->image) {
                Storage::delete($product->image);
            }
        } else {
            
            $imagePath = $product->image;
        }

        $product->update([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $request->input('price'),
            'stock' => $request->input('stock'),
            'image' => $imagePath, 
            'category' => $request->input('category'),
            'status' => $request->input('status', true), 
        ]);

        return response()->json($product, 200);
    }

    // Delete a product
    public function destroy(Product $product)
    {
        // Delete the associated image if it exists
        if ($product->image) {
            Storage::delete($product->image);
        }

        $product->delete();
        return response()->json(null, 204);
    }



    public function show($id)
    {
        $product = Product::find($id);
    
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    
        return response()->json($product);
    }







}
