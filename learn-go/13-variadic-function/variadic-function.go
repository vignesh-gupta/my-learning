package main

import "fmt"

func sum(nums ...int) { // variadic function is a function that can accept any number of arguments
	// fmt.Print(nums, " ")
	total := 0

	for num2, num := range nums { // range returns the index and the value of the array ( for index, value := range array)
		fmt.Println("nums2:", num2)
		total += num
	}
	fmt.Println(total)
}

func main() {

	sum(1, 2)
	sum(1, 3, 5)

	nums := []int{1, 2, 3, 4}
	sum(nums...) // if you already have multiple args in a slice, apply them to a variadic function using func(slice...)
}
