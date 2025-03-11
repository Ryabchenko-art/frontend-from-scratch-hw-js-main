// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {

    return (a > b || a > c) ? true : (b > a || b > c) ? true : (c > a || c > b) ? true : false;
}
findLargest (1, 2, 3)

/* if (a > b || a > c) {
         return a;
     } if (b > a || b > c) {
        return b;
    } else if (c > a || c > b){
        return c;
    } else {
        return a || b || c;
    }
*/