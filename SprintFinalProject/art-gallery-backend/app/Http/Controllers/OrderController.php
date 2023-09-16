<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{

    public function index()
    {
        $orders = Order::all();
        return response()->json($orders);
    }

    public function store(Request $request)
    {
        // Validate and save the new order
        $this->validate($request, [
            'order_number' => 'required|unique:orders',
            'customer_id' => 'required|exists:customers,id',
            'order_status' => 'required',
        ]);

        $order = Order::create([
            'order_number' => $request->input('order_number'),
            'customer_id' => $request->input('customer_id'),
            'order_status' => $request->input('order_status'),
        ]);

        return response()->json($order, 201);
    }

    public function update(Request $request, Order $order)
    {
        $this->validate($request, [
            'order_status' => 'required',
        ]);

        $order->update([
            'order_status' => $request->input('order_status'),
        ]);

        return response()->json($order, 200);
    }

    // Delete an order
    public function destroy(Order $order)
    {
        $order->delete();
        return response()->json(null, 204);
    }
}
