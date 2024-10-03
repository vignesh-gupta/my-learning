package main

import (
	"fmt"
	"maps"
)

func main() {

	m := make(map[string]int) // map[key-type]value-type {key:value}

	m["k1"] = 7
	m["k2"] = 13

	fmt.Println("map:", m)

	v1 := m["k1"]
	fmt.Println("v1:", v1)

	v3 := m["k3"]
	fmt.Println("v3:", v3)

	fmt.Println("len:", len(m))

	delete(m, "k2")
	fmt.Println("map:", m)

	clear(m)
	fmt.Println("map:", m)

	prs2, prs := m["k2"] // prs2 is the value, prs is the boolean value if the key is present or not
	fmt.Println("prs:", prs, prs2)

	n := map[string]int{"foo": 1, "bar": 2}
	fmt.Println("map:", n)

	n2 := map[string]int{"foo": 1, "bar": 2}
	if maps.Equal(n, n2) { // two maps equal cannot be compared directly with == operator
		fmt.Println("n == n2")
	}
}
