angular.module('app', [])

angular.module('app')
    .controller('app.CepController', CepController);

CepController.$inject = ['$http', '$injector', '$scope'];
    
function CepController($http, $injector, $scope) {
    var vm = this;
    var CepService = $injector.get('app.CepService');
    
    vm.CepService = CepService;
    vm.consultar = _consultar;

    function _consultar(cep) {
        CepService.consultar(cep).then(function(response) {
            vm.logradouro = response.logradouro;
            vm.bairro = response.bairro;
            vm.cidade = response.cidade;
            vm.estado = response.estado;
        });
    }
}