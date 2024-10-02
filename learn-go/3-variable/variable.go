package main

import "fmt"

func main() {
	var a = "first variable"
	fmt.Println(a)

	var b, c = 1, 2  // multiple variables can be declared at once with type like (var b, c int = 1, 2)
	fmt.Println(b, c)

	var d = true
	fmt.Println(d)

	var e int // variables declared without a corresponding initialization are zero-valued. For example, the zero value for an int is 0
	fmt.Println(e)

	f := "short" // shorthand for declaring and initializing a variable
	fmt.Println(f)
}