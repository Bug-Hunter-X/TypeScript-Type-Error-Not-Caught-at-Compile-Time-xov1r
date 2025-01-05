# TypeScript Type Error Not Caught at Compile Time

This repository demonstrates a scenario where a type error in TypeScript is not detected during compilation, leading to a runtime error. The example involves a simple addition function where the type checking is insufficient to catch incorrect argument types.

## Problem

The `add` function is defined to accept two numbers, but it's called with a string and a number.  While this is clearly wrong, the TypeScript compiler does not produce an error. This unexpected behavior can make it difficult to catch errors during development.

## Solution

The solution involves improving the type checking or using more restrictive type definitions to ensure that the function can only be called with the correct types of arguments.  Stricter type checking and using tools that perform more thorough static analysis are recommended for preventing this type of issue. 