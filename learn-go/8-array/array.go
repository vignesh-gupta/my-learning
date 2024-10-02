package main

import "fmt"

func main() {

	var a [5]int // this is an array with 5 elements initialized with the zero value of int
	fmt.Println("emp:", a)

	a[4] = 100
	fmt.Println("set:", a)
	fmt.Println("get:", a[4])

	fmt.Println("len:", len(a))

	b := [5]int{1, 2, 3, 4, 5} // this is an array with 5 elements initialized with the values 1, 2, 3, 4, 5
	fmt.Println("dcl:", b)

	b = [...]int{1, 2, 3, 4, 5} // this is an array with undefined length initialized with the values 1, 2, 3, 4, 5 (compiler will determine the length)
	fmt.Println("dcl:", b)

	b = [...]int{100, 3: 400, 500} // this is an array with 5 elements, as index 3 is set 400 it will skip index 1 and 2 and set 400 at index 3 and 500 at index 4
	fmt.Println("idx:", b)

	var twoD [2][3]int // this is a 2d array with 2 rows and 3 columns initialized with the values 0, 0, 0 and using a nested for loop to set the values of the array
	for i := 0; i < 2; i++ {
		for j := 0; j < 3; j++ {
			twoD[i][j] = i + j
		}
	}
	fmt.Println("2d: ", twoD)

	twoD = [2][3]int{ // this is a 2d array with 2 rows and 3 columns initialized with the values 1, 2, 3
		{1, 2, 3},
		{1, 2, 3},
	}
	fmt.Println("2d: ", twoD)
}
