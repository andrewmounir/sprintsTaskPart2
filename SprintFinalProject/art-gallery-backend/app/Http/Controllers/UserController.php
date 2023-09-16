<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    // Register a new user
    public function register(Request $request)
    {
        // Validate and create the new user
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
        ]);

        return response()->json($user, 201);
    }

    // User login
    public function login(Request $request)
    {
        // Validate login credentials
        $credentials = $request->only(['email', 'password']);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            return response()->json($user);
        }

        return response()->json(['message' => 'Invalid credentials'], 401);
    }

    // User logout
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out']);
    }

    // Get the currently authenticated user
    public function getAuthenticatedUser()
    {
        $user = Auth::user();
        return response()->json($user);
    }

    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }

    public function destroy($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $user->delete();

        return response()->json(['message' => 'User deleted successfully'], 204);
    }

}
