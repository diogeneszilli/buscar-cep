angular.module('app')
    .service('app.CepService', CepService);

CepService.$inject = ['$http'];
    
function CepService($http) {
    var URL = 'https://apicorreios.herokuapp.com/api/cep/'
    var endereco = {};

    function consultar(cep) {
        return $http.get(URL + cep)
            .then(function(response) {
                endereco.logradouro = response.data.logradouro;
                endereco.bairro = response.data.bairro;
                endereco.cidade = response.data.cidade;
                endereco.estado = response.data.uf;
                return endereco;
            });
    };

    return {
        consultar : consultar
    };
}