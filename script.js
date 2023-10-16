let weight;
weight = prompt('BMIを測定します。まずはあなたの体重(kg)を入力して下さい');

let height;
height = prompt('BMIを測定します。次にあなたの身長(m)を入力して下さい');

let bmi = weight / (height * height);

let message = 'あなたのBMIは「' + bmi + '」です。'
alert(message);