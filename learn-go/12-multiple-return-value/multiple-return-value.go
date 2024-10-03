package main

import "fmt"

func vals() (int, int) { // multiple return values (int, int)
	return 3, 7
}

func main() {

	a, b := vals()
	fmt.Println(a)
	fmt.Println(b)

	_, c := vals() // use _ to ignore any unwanted values
	fmt.Println(c)
}
