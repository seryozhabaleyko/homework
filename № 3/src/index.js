// quadraticEquation :: Number -> [Number]
function quadraticEquation(a,b,c) {
    let result, x1, x2, discriminant;

    discriminant = b**2 - 4 * a * c;

    if (discriminant > 0) { // квадратное уравнение имеет два разных корня
        x1 = (-b + discriminant**0.5) / (2 * a);
        x2 = (-b - discriminant**0.5) / (2 * a);
        result = [x1, x2];
    } else if (discriminant === 0) { // квадратное уравнение имеет два одинаковых корня
        x1 = -b / (2 * a);
        x2 = x1;
        result = [x1];
    } else if (discriminant < 0) {
        result = []; // Квадратное уравнение не имеет корней
    }

    return result;
}

console.log(quadraticEquation(1, 8, 16)); // [-4]
