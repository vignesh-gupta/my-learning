package main

import "fmt"

type base struct {
	num int
}

func (b base) describe() string {
	return fmt.Sprintf("base with num=%v", b.num)
}

type container struct {
	base
	str string
}

func main() {

	co := container{
		base: base{
			num: 1,
		},
		str: "some name",
	}

	fmt.Printf("co={num: %v, str: %v}\n", co.num, co.str)

	fmt.Println("also num:", co.base.num)

	fmt.Println("describe:", co.describe()) // Since container embeds base, the methods of base also become methods of a container

	type describer interface {
		describe() string
	}

	var d describer = co // Since container implements the describer interface, it can be assigned to a variable of type describer
	fmt.Println("describer:", d.describe())
}
