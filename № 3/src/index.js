document.addEventListener('DOMContentLoaded', () => {

    function quadraticEquation(a,b,c) {
        let x1, x2, discriminant;

        discriminant = b**2 - 4 * a * c;

        if (discriminant > 0) { // квадратное уравнение имеет два разных корня
            x1 = (-b + discriminant**0.5) / (2 * a);
            x2 = (-b - discriminant**0/5) / (2 * a);
        } else if (discriminant === 0) { // квадратное уравнение имеет два одинаковых корня
            x1 = -b / (2 * a);
            x2 = x1;
        } else if (discriminant < 0) {
            return 'Квадратное уравнение не имеет корней';
        }

        return `x1 = ${x1}, x2 = ${x2}`;
    }

    console.log(quadraticEquation(1,8,16)); // x1 = -4, x2 = -4
});
