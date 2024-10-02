package main

import (
	"fmt"
	"slices"
)

// Make difference between array and slice
// Array is a numbered sequence of elements of a single type with a fixed length
// Slice is a dynamically-sized, flexible view into the elements of an array (slice is a reference to an array)

func main() {

	var s []string // Slice is a dynamically-sized, flexible view into the elements of an array
	fmt.Println("uninit:", s, s == nil, len(s) == 0)

	// make([]T, length, capacity) creates a slice of type T with a length of length and capacity of capacity
	s = make([]string, 3) // make function allocates a zeroed array and returns a slice that refers to that array
	fmt.Println("emp:", s, "len:", len(s), "cap:", cap(s))

	s[0] = "a"
	s[1] = "b"
	s[2] = "c"
	fmt.Println("set:", s)
	fmt.Println("get:", s[2])

	fmt.Println("len:", len(s))

	s = append(s, "d")
	s = append(s, "e", "f")
	fmt.Println("apd:", s)

	c := make([]string, len(s))
	copy(c, s)
	fmt.Println("cpy:", c)

	l := s[2:5] // slice operator s[startIndex:endIndex] where startIndex is inclusive and endIndex is exclusive
	fmt.Println("sl1:", l)

	l = s[:5] // if startIndex is omitted, it defaults to 0
	fmt.Println("sl2:", l)

	l = s[2:] // if endIndex is omitted, it defaults to the length of the slice
	fmt.Println("sl3:", l)

	t := []string{"g", "h", "i"}
	fmt.Println("dcl:", t)

	t2 := []string{"g", "h", "i"}
	if slices.Equal(t, t2) {
		fmt.Println("t == t2")
	}

	twoD := make([][]int, 3)
	for i := 0; i < 3; i++ {
		innerLen := i + 1
		twoD[i] = make([]int, innerLen)
		for j := 0; j < innerLen; j++ {
			twoD[i][j] = i + j
		}
	}
	fmt.Println("2d: ", twoD)
}
