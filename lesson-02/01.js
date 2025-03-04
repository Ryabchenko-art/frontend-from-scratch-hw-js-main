/*
* Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу
* на основе его роли и наличия разрешений.
* Полученное булево значение сохраните в переменной isAccess.

* Условия доступа:
* - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем
* (isVerifiedUser)
* - А также пользователь должен обладать специальным разрешением (hasSpecialPermission)
* или временным пропуском (hasTemporaryPass)
*/

// тестовые данные (значения можно менять)
const isAdmin = true
const isVerifiedUser = false
const hasSpecialPermission = false
const hasTemporaryPass = true

let isAccess = (isAdmin || hasSpecialPermission) ? true : (isVerifiedUser && hasTemporaryPass) ? true : false;
console.log(isAccess)


// condition (isTrue)  ?  1 : 2
// (isAdmin || hasSpecialPermission) && (isVerifiedUser && (hasSpecialPermission || !hasTemporaryPass))||
// (isAdmin || !hasSpecialPermission) && (!isVerifiedUser || hasTemporaryPass)
// your code

