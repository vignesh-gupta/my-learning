package main

import "fmt"

func zeroVal(ival int) { // param will be passed by value
	ival = 0
}

func zeroPtr(iptr *int) { // *int is a pointer to an int and param will be passed by reference
	*iptr = 0 // *iptr gives the value at the address stored in iptr
}

func main() {
	i := 1
	fmt.Println("initial:", i)

	zeroVal(i)
	fmt.Println("zeroVal:", i) // i is still 1 as it was passed by value so zeroVal got only the copy of i

	zeroPtr(&i)
	fmt.Println("zeroPtr:", i) // i is now 0 as it was passed by reference so zeroPtr got the address of i and changed the value at that address

	fmt.Println("pointer:", &i) // &i gives the address of i
}
