const chai = require('chai');
const expect = require('chai').expect;
const chaiAsPromised = require('chai-as-promised');
const rfr = require = require('rfr');
const portafolio = rfr('controller/portafolio');

chai.use(chaiAsPromised);

describe('Profit Analytics:', () => {

  before(function() {
    // apply population data
  });

  after(function() {
    // clear data
  });

  describe('calculate profit:', () => {
    it('should calculate the profit of a portfolio:', () => {
      const profit = portafolio.profit(89522,20180101, 20180201);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.message).to.equal('Valor calculado correctamente');
    });

    it('should calculate the profit of a invalid portfolio:', () => {
      const profit = portafolio.profit(-1,20180101, 20180101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Portafolio inexistente');
    });

    it('should calculate the profit of a portfolio with invalid dates:', () => {
      const profit = portafolio.profit(89522,20190101, 20190101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Fechas sin pagos aplicados disponibles');
    });

    it('should indicate missing search parameters:', () => {
      const profit = portafolio.profit();
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Faltan parametros para ejecutar la busqueda');
    });
  });

  describe('Calculate ideal profit:', () => {
    it('should calculate the profit of a portfolio:', () => {
      const profit = portafolio.idealProfit(89522,20180101, 20180101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.message).to.equal('Valor calculado correctamente');
      //portafolio.noPaymentPercent(89522,20180101, 20180101);
    });

    it('should calculate the profit of a invalid portfolio:', () => {
      const profit = portafolio.idealProfit(-1,20180101, 20180101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Portafolio inexistente');
    });

    it('should calculate the profit of a portfolio with invalid dates:', () => {
      const profit = portafolio.idealProfit(89522,20190101, 20190101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Fechas sin pagos aplicados disponibles');
    });

    it('should indicate missing search parameters:', () => {
      const profit = portafolio.idealProfit();
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Faltan parametros para ejecutar la busqueda');
    });
  });

  describe('calculate non-payment percentage:', () => {
    it('should calculate the profit of a portfolio:', () => {
      const profit = portafolio.noPaymentPercent(89522,20180101, 20180101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.message).to.equal('Valor calculado correctamente');
    });

    it('should calculate the profit of a invalid portfolio:', () => {
      const profit = portafolio.noPaymentPercent(-1,20180101, 20180101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Portafolio inexistente');
    });

    it('should calculate the profit of a portfolio with invalid dates:', () => {
      const profit = portafolio.noPaymentPercent(89522,20190101, 20190101);
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Fechas sin pagos aplicados disponibles');
    });

    it('should indicate missing search parameters:', () => {
      const profit = portafolio.noPaymentPercent();
      expect(profit).to.be.a('object');
      expect(profit.value).to.be.a('number');
      expect(profit.value).to.equal(0);
      expect(profit.message).to.equal('Faltan parametros para ejecutar la busqueda');
    });
  });

});
