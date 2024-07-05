'''
*
* *
*   *
*     *
*       *
*         *
*           *
*         *
*       *
*     *
*   *
* *
*
'''
def print_d_triangle(row):
    for i in range(0, row):
        print('*', end='')
        if(i>0):
            print(' '*(2*i-1), '*', end='') 
        print()

    for j in range(row, -1, -1):
        print('*', end='')
        if(j>=1):
            print(' '*(j*2-1), '*', end='')
        print() 
        
row = int(input())
print_d_triangle(row)

