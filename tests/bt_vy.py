count = 0
numbers = []
for i in range(900):
    if i % 21 == 0:
        count += 1
        numbers.append(i)
print('Có ', count, ' số chẵn!')

print('Các số đó là: ', numbers)