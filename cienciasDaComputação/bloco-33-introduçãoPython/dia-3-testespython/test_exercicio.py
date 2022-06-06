from exercicios_test import new_list_number


def test_new_list_number_should_return_list_of_numbers():
    assert new_list_number(2) == [1, 2]


def test_new_list_number_divisible_by_three_should_be_fizz():
    assert new_list_number(3)[-1] == "Fizz"


def test_new_list_number_divisible_by_five_should_be_buzz():
    assert new_list_number(5)[-1] == "Buzz"


def test_new_list_number_divisible_by_five_and_three_should_be_fizzbuzz():
    assert new_list_number(15)[-1] == "FizzBuzz"
