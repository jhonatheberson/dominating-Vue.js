new Vue({
  el: "#desafio",
  data: {
    nome: "jhonat",
    idade: "20",
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
  },
  methods: {
    idade_mult: function () {
      return this.idade * 3;
    },
    number_random: function () {
      return Math.random();
    },
  },
});
