package main

import "fmt"

type rect struct {
	width, height int
}

// func (receiver) identifier(parameters) (return(s)) { ... }
// receiver.identifier() // Method call

func (r *rect) area() int { // This method has a receiver type of *rect (pointer to rect)
	return r.width * r.height
}

func (r rect) perim() int { // This method has a receiver type of rect (value of rect)
	return 2*r.width + 2*r.height
}

func main() {
	r := rect{width: 10, height: 5}

	fmt.Println("area: ", r.area())
	fmt.Println("perim:", r.perim())

	rp := &r
	fmt.Println("area: ", rp.area())
	fmt.Println("perim:", rp.perim())
}
