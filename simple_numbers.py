from datetime import datetime


def simple_numbers(quantity: int):
    number = 0
    list_of_simple = [None] * quantity
    index = 0
    while index < quantity:
        number += 1
        # print(list_of_simple)
        start = 2 if quantity > 1 else 1
        for reducer in range(start, number):
            if number not in (1, 2) and number % reducer == 0:
                break
        else:
            list_of_simple[index] = number
            index += 1

    return list_of_simple


if __name__ == '__main__':
    start_time = datetime.now()
    simples = simple_numbers(10000)
    print(simples)
    end_time = datetime.now()
    print(end_time-start_time)
