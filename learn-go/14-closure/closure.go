package main

import "fmt"

func intSeq() func() int {
	i := 0 // i is declared outside the function and is available to the function
	return func() int {
		i++
		return i
	}
}

func main() {

	nextInt := intSeq()

	fmt.Println(nextInt()) // 1
	fmt.Println(nextInt()) // 2 - i is declared outside the function and is available to the function so it is incremented
	fmt.Println(nextInt()) // 3

	newInts := intSeq()
	fmt.Println(newInts()) // as it is a new function, i is reset to 0 and incremented
}
