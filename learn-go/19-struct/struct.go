package main

import "fmt"

type person struct {
	name string
	age  int
}

func newPerson(name string) *person { // Returns a pointer to a person

	p := person{name: name}
	p.age = 42
	return &p
}

func main() {

	fmt.Println(person{"Bob", 20}) // Syntax to create a struct

	fmt.Println(person{name: "Alice", age: 30})

	fmt.Println(person{name: "Fred"})

	fmt.Println(&person{name: "Ann", age: 40})

	fmt.Println(newPerson("Jon"))

	s := person{name: "Sean", age: 50}
	fmt.Println(s.name)

	sp := s // Copy the value and store it to different memory location
	fmt.Println(sp.age)

	sp.age = 51 // Structs are mutable
	fmt.Println(sp.age, s.age)

	sp2 := &s // Pointer to a struct so it points to the same memory location
	sp2.age = 52
	fmt.Println(sp2.age, s.age)

	dog := struct { // Anonymous struct with fields
		name   string
		isGood bool
	}{
		"Rex",
		true,
	}
	fmt.Println(dog)
}
