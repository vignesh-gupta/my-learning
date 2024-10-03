package main

import "fmt"

func plus(a int, b int) int { // return type is int as mentioned after the parameters
	return a + b
}

func plusPlus(a, b, c int) int { // if the parameters are of the same type, you can omit the type from all but the last
	return a + b + c
}

func main() {

	res := plus(1, 2)
	fmt.Println("1+2 =", res)

	res = plusPlus(1, 2, 3)
	fmt.Println("1+2+3 =", res)
}
