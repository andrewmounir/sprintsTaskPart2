@extends('layouts.app')

@section('content')
<h1>Customer Details</h1>

<p><strong>Name:</strong> {{ $customer->name }}</p>
<p><strong>Email:</strong> {{ $customer->email }}</p>


<a href="{{ route('customers.index') }}">Back to Customers List</a>
@endsection