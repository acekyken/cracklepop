#!/usr/bin/env python3

cracklepop = ''

for i in range(1,101):
    if (i%3 == 0):
        cracklepop += 'Crackle'
    if (i%5 == 0):
        cracklepop += 'Pop'
    if len(cracklepop):
        print(cracklepop)
    else:
        print(i)
    cracklepop = ''