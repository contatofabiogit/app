document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    var vm = new Vue({
        el: '#app',
        data: {
            clientes: [],
            produtos: [],
            filterProduto: '',
            compra: {},
            compras: []
        },
        methods: {
            sync: function () {
                $.ajax({
                    dataType: 'json',
                    url: 'http://localhost/appzenir/api/read.php',
                    success: function (dados) {
                        localStorage.setItem('clientes', JSON.stringify(dados));
                        vm.getClientes();
                        alert("Lista de clientes atualizadas!");
                    },
                    erro: function () {
                        alert("Erro de conexão ao ligar-se com o servidor. ");
                    }
                });
                $.ajax({
                    dataType: 'json',
                    url: 'http://localhost/appzenir/api/readProduto.php',
                    success: function (dados) {
                        localStorage.setItem('produtos', JSON.stringify(dados));
                        vm.getProdutos();
                        alert("Lista de produtos atualizados!");
                    },
                    erro: function () {
                        alert("Erro de conexão ao ligar-se com o servidor. ");
                    }
                });
            },
            setCompras:function(){
                localStorage.setItem('compras', JSON.stringify(this.compras));
            },
            getClientes: function () {
                this.clientes = JSON.parse(localStorage.getItem('clientes'));
            },
            getProdutos: function () {
                this.produtos = JSON.parse(localStorage.getItem('produtos'));
            },
            getCompras: function () {
                this.compras = JSON.parse(localStorage.getItem('compras'));
            },
            removeCompra: function (index) {
                this.compras.splice(index);
                this.setCompras();
                alert("Pedido apagado com sucesso!");
            },
            addCompra: function () {
                this.compras.push(this.compra);
                this.setCompras();
                this.compra = {};
                alert("Pedido salvo!");
            }
        },
        ready: function () {
            this.getProdutos();
            this.getClientes();
            this.getCompras();

        }
    })
}