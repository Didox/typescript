var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = 1;
var danilo = function () { return 1 + 1; };
var Bola = /** @class */ (function () {
    function Bola(_obs) {
        this.obs = _obs;
    }
    return Bola;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.salvar = function () {
        console.log("salvando ...");
    };
    return Pessoa;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cliente.prototype.excluir = function (x, y) {
        return x + y;
    };
    Cliente.prototype.atualizar = function () {
        return true;
    };
    Cliente.Listar = function () {
        var lista = [];
        return lista;
        // let lista2 = [new Bola("teste")];
        // return lista2
    };
    return Cliente;
}(Pessoa));
var cliente = new Cliente();
// console.log(cliente.idade)
console.log(cliente.cpf);
console.log(cliente.nome);
console.log(Cliente.Listar());
