### PhP Research Task
![phpLogo](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png)

## Topics Coverd In This Research

1. [Variables (Case Sensitivity)](#Variables-case-sensitivity)
2. [Functions (Case Sensitivity)](#functions-case-sensitivity)
3. [ReservedWords (Overview)](#reservedwords-overview)

## Variables (Case Sensitivity)

In PHP, variables are case-sensitive, which means that even a slight difference in letter case makes them distinct. This applies to both the declaration and the usage of variables. For example:

> "$myVariable = "Hello";
> $myvariable = "World";

> echo $myVariable; // Outputs: Hello
> echo $myvariable; // Outputs: World"

**Here, $myVariable and $myvariable are treated as two separate variables. This case sensitivity can be both advantageous and challenging. It allows for creating variables with different purposes, but it also requires careful naming to avoid confusion.**

## Functions (Case Sensitivity)

Function names in PHP are also case-insensitive when calling them. This means you can use different cases to call the same function. However, when defining functions, you need to match the case exactly. For instance:

> "function myFunction() {
> echo "Hello!";
> }

> myFunction(); // Outputs: Hello"
 (MyFunction(); // Also Outputs: Hello)

**Both myFunction() and MyFunction() will call the same function defined as myFunction().**

## ReservedWords (Overview)

Reserved words, also known as keywords, are terms predefined by PHP and have specific meanings within the language. They're used for various purposes and should not be used as custom identifiers (variable, function, class names, etc.). Some examples of reserved words include:

- echo: Used to output text or variables to the browser.
- if, else: Used for conditional statements to control program flow.
- while, for, foreach: Used for looping and iterating over data structures.
- function: Used to declare user-defined functions.
- class: Used to define classes, which are blueprints for objects.
- public, private, protected: Used for access modifiers within classes to define visibility of properties and methods.
- return: Used to specify the return value of a function.
- namespace: Used to organize code into separate namespaces, preventing naming conflicts.
  It's crucial
