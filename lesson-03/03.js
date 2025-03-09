// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(a, b, c) {
    return (a > b || a > c) ? true : (b > a || b > c) ? true : (c > a || c > b) ? true : false;
}

