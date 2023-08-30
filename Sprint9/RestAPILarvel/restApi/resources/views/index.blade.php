@extends('layouts.app')

@section('content')
<h1>Customers</h1>

<ul>
    @foreach ($customers as $customer)
    <li>
        <a href="{{ route('customers.show', $customer->id) }}">{{ $customer->name }}</a>
    </li>
    @endforeach
</ul>
@endsection