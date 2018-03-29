angular.module('app', [])

angular.module('app')
    .controller('app.MeuController', MeuController);
    
function MeuController($http) {
    var vm = this;

    vm.nome = "";
    vm.peso = 0;
    vm.altura = 0;
    vm.respostas = [];
    vm.calcular = function() {
        $http.get("/api/imc?peso="+vm.peso+"&altura="+vm.altura+"&nome="+vm.nome)
            .then(function(response) {
                vm.respostas.push(response.data.mensagem);
            });
    };
}