- # VUE.JS

**Diretivas** - é recurso do html, propiedades personalizadas, e _Vue.js_ pega elas para alterar dados no html

- **v-on** - é para chamar metodos, nesse caso de input

  ```
  <input type="text" v-on:input="alterarTitulo" />
  ```

- **v-once** - faz que seja renderizado apenas uma vez o trecho do html

  ```
  <p v-once>{{ titulo }}</p>
  ```

- **v-bind** - ele faz a conexão (ligação) com methodo que nesse caso é _href_ (link)

  ```
   <a v-bind:href="link">Google</a>
  ```

**padrão double start** - lê o que esta dentro do codigo html e substitui por alguma coisa (interpolar) do Vue.js

**{{ metodo }}**

    <p>{{ saudacao() }}</p>
    <a v-bind:href="link">Google</a

**methods** - são metodos que acontece no html (eventos), ações serem chamados

```
  <input type="text" v-on:input="alterarTitulo" />

  <script>
  new Vue({
    el: "#app", //aqui estou dizendo qual o trecho que quero controlar no vue
    data: {
      //um objeto, que dis o que quero colocar no meu template
      titulo: "Usando VueJS 2!",
    },
    methods: {
      alterarTitulo(event) {
        this.titulo = event.target.value;
      },
    },
  });
</script>
```

`nvm install [version do node LTS]` = instalação do node

`nvm alias default [version do node]` = setando a versão do sistema operacional

`node -v` = mostra a versão instalada no pc

- # atalhos visual code

## atalho 1

```
div#conteudo
```

vai gerar isso div com id="conteudo":

```
<div id="conteudo"></div>
```

## atalho 2

```
div.estilo
```

vai gerar classe com class="estilo-1"

```
<div class="estilo-1"></div>
```

## atalho 3

```
div#conteudo.estilo-2
```

vai gerar classe com class="estilo-2" e id="conteudo"

```
<div id="conteudo" class="estilo-2"></div>
```

## atalho 4

```
img[src]
```

vai gerar img com tag src=""

```
<img src=" alt="">
```

## atalho 5

```
p[jhonat-teste]#texto.estilo-3
```

vai gerar paragrafo com propriedade personalizada "jhonat-teste", id="texto", class="estilo-3"

```
<p jhonat-teste="" id="texto" class="estilo-3"></p>
```

- # yarn
  _instalar bibliotecas de terceiros_

_fornecer bibliotecas_

_Yarn workspaces - compartilhar dependencias_

_semelhante pip - Python_

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

= PACOKE DO YARN

```
sudo apt-get update && sudo apt-get install --no-install-recommends yarn
```

= INSTALA YARN IGNORANDO NODE

- # Frameworks

- Vuex
- Vue CLI

## Contributing

Please read [CONTRIBUTING.md](https://github.com/jhonatheberson/dominating-Vue.js/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) For the versions available, see the [tags on this repository](https://github.com/jhonatheberson/dominating-Vue.js/tags).

## Authors

- **Jhonat Heberson** - _Initial work_ - [jhonatheberson](https://github.com/jhonatheberson/)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Acknowledgments
