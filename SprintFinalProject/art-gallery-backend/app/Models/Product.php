<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'price',
        'category',
        'image'
        // Add more fields as needed
    ];

    // Define relationships (if applicable)
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    
    // Add any other methods or customization you need
}
