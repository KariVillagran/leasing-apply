const rfr = require('rfr');
const portafolioModel = rfr('db/models/portafolio');
const propertyModel = rfr('db/models/property');

const _checkParams = (portfolio, startDate, endDate) => {
    if(!portfolio || !startDate || !endDate) {
        throw new Error('Faltan parametros para ejecutar la busqueda');
    }
};

const profit = (portfolio, startDate, endDate) => {
    try {
        _checkParams(portfolio, startDate, endDate);
    } catch (error) {
        return {
            message: error.message,
            value: 0
        };
    }
    const uniqPortafolio = portafolioModel.readOne(portfolio);
    if(!uniqPortafolio) {
        return {
            message: 'Portafolio inexistente',
            value: 0
        };
    }
    const profitBetweenDates = uniqPortafolio.properties.map(prop => prop.payments
        .filter(payment => payment.createdAt >= startDate && payment.createdAt <= endDate))
        .reduce((acc, val) => acc.concat(val));
    if(!profitBetweenDates[0]) {
        return {
            message: 'Fechas sin pagos aplicados disponibles',
            value: 0
        }; 
    } 
    const profit = profitBetweenDates.map(payment => payment.income + payment.cost)
        .reduce((val, current) => val + current);
    return {
        message: 'Valor calculado correctamente',
        value: profit
    };
};

const _getIncomeType = () => {
    const incomeType = 80;
    return incomeType;
};

const _getCostType = () => {
    const costType = 80;
    return costType;
};

const idealProfit = (portfolio, startDate, endDate) => {
    try {
        _checkParams(portfolio, startDate, endDate);
    } catch (error) {
        return {
            message: error.message,
            value: 0
        };
    }
    const uniqPortafolio = portafolioModel.readOne(portfolio);
    if(!uniqPortafolio) {
        return {
            message: 'Portafolio inexistente',
            value: 0
        };
    }
    const profitBetweenDates = uniqPortafolio.properties.map(prop => prop.payments
        .filter(payment => payment.createdAt >= startDate && payment.createdAt <= endDate))
        .reduce((acc, val) => acc.concat(val));
    if(!profitBetweenDates[0]) {
        return {
            message: 'Fechas sin pagos aplicados disponibles',
            value: 0
        }; 
    } 
    const profit = profitBetweenDates.map(payment => {
            const income = payment.income === 0 ? _getIncomeType() : payment.income;
            const cost = payment.cost === 0 ? _getCostType() : payment.cost;
            return income + cost;
        })
        .reduce((val, current) => val + current);
    return {
        message: 'Valor calculado correctamente',
        value: profit
    };
};

const noPaymentPercent = (portfolio, startDate, endDate) => {
    try {
        _checkParams(portfolio, startDate, endDate);
    } catch (error) {
        return {
            message: error.message,
            value: 0
        };
    }
    const uniqPortafolio = portafolioModel.readOne(portfolio);
    if(!uniqPortafolio) {
        return {
            message: 'Portafolio inexistente',
            value: 0
        };
    }
    const totalItemsToPayment = uniqPortafolio.properties.map(prop => prop.payments
        .filter(payment => payment.createdAt >= startDate && payment.createdAt <= endDate))
        .reduce((acc, val) => acc.concat(val));
    if(!totalItemsToPayment[0]) {
        return {
            message: 'Fechas sin pagos aplicados disponibles',
            value: 0
        }; 
    }
    const totalToPayment = totalItemsToPayment.length;
    const totalItemsNoPayment = totalItemsToPayment.filter(payment => payment.income === 0);
    const totalNotPayment = totalItemsNoPayment.length;
    return {
        message: 'Valor calculado correctamente',
        value: (totalNotPayment/totalToPayment) * 100
    };
};

module.exports = {
    profit,
    idealProfit,
    noPaymentPercent,
}