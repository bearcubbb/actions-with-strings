let text = document.getElementById("text").innerText;
console.log(`1. Количество символов в тексте: ${text.length}`);

let result = text.replace(/;/g, ";\n");
console.log(`2. Текст с переносами строк: \\n ${result}`);

let substring = result.replace(/\s/g, '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);

let newText = result.substring(27, 49);
console.log(`4. Извлечение подстроки: ${newText}`);

let replacedText = newText.replace(/клён/g, 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

let replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

let replacedText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

let index = text.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);

let modifiedText = replacedText.replace(replacedText[0], replacedText[0].toUpperCase());
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);