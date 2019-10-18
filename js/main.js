let money = 80000,
    income = 'freelance',
    addExpenses = 'Кредит, Машина, Ремонт, - это обьект',
    deposit = false,
    misson = 3000000,
    period = 12,
    budgetDay = money % 30;

    addExpenses.toLowerCase();


    console.log('1. ' + typeof money, typeof income, typeof deposit);
    console.log('2. ' + income.length);
    console.log('3. ' + 'Период ' + period + ' месяцев. ' + 'Цель заработать ' + misson + ' рублей');
    console.log('4. ' + addExpenses.split(','));
    console.log('5. ' + 'Бюджет на день = ' + budgetDay + ' рублей');
    