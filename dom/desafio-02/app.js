new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    exibirAlerta(event) {
      alert('exibindo alerta"');
    },
    armazenarValue(event) {
      console.log(event.target.value);
      this.valor = event.target.value;
    },
  },
});
