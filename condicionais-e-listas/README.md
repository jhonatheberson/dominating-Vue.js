# Condicionais

- ## Renderizando condicional com **v-if/v-else**

  aqui podemos aplicar condicionais a tags de html como **paragrafos** **div**, **templates** etc...
  é importante dizer com **v-if** ou **v-else**, tira(remove) o elemento da pagina, e não esconde. quem esconde é **v-show**

  ```
  <div id="app">
    <p v-if="logado">Usúario logado: {{ nome }}</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/condicionais-v1.html)

- ## Seleção múltipla com **v-else-if**

  a seleção multipla que posso colocar varios condicionais intermediarios entre **v-if** e **v-else** usando **v-else-if**...

  ```
  <div id="app">
    <p v-if="logado">Usúario logado: {{ nome }}</p>
    <p v-else-if="anonimo">Navegando como anonimo</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
    <input type="checkbox" v-model="anonimo" />
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/condicionais-v2.html)

  - ## Usando v-if com **template**

  a vantagem de usar condicionais no template é que o template não é adicionado ao **html** ou seja ele não é renderizado no final, como é uma **div**

  ```
  <div id="app">
    <template v-if="logado">
      <p>Usúario logado: {{ nome }}</p>
      <p>Perfil: Admin</p>
    </template>
    <!-- <div v-if="logado">
      <p>Usúario logado: {{ nome }}</p>
      <p>Perfil: Admin</p>
    </div> -->
    <p v-else-if="anonimo">Navegando como anonimo</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
    <input type="checkbox" v-model="anonimo" />
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/condicionais-v3.html)

  - ## Escodendo o elemento com **v-show**

  Esse **v-show** ele não manipula **DOM** mas faz com elementos **CSS** para esconder da pagina e menos custoso para exibir e esconder na html frenquetemente e a informação não são dados sigilosos (segurança), logo é mais interessante usar o **v-show**

  ```
  <div id="app">
  <template v-if="logado">
    <p>Usúario logado: {{ nome }}</p>
    <p>Perfil: Admin</p>
  </template>
    <!-- REMOVE E INSERE ELEMENTOS DA DOM (NÃO VISIVEL PARA PESSOAS DE FORA QUANDO REMOVIDO) OU SEJA NÃO ESTÁ NA PAGINA -->
    <p v-else-if="anonimo">Navegando como anonimo</p>
    <p v-else>Nenhum usuário logado</p>
    <button @click="logado = !logado">{{ logado ? 'Sair' : 'Entrar' }}</button>
    <input type="checkbox" v-model="anonimo" />
    <hr />
    <!-- USA ELEMENTOS DO CSS PARA NÃO MOSTRAR, PORÉM É VISIVEL NA PAGINA, MESMO QUE NÃO MOSTRE. -->
    <footer v-show="logado">Desenvolvido pra vc!</footer>
    <footer v-show="!logado">Desenvolvido pra vc que é desconhecido!</footer>
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/condicionais-v4.html)

# Listas

- ## Renderizando Listas com **v-for**

  Esse **v-for** mesma logica da todas as linguagem precisamos de um objeto interavel **(lista)** que em nosso caso é **cores** e objeto que vai asumir o valor do interador que é **cor**

  ```
  <div id="app">
  <ul>
    <!-- cores é o obejeto interavel -->
    <li v-for="cor in cores">{{cor}}</li>
    <!-- <li v-for="cor in cores" :teste="cor">{{cor}}</li> -->
  </ul>
  </div>


  <script>
    new Vue({
      el: "#app",
      data: {
        cores: ["vermelho", "verde", "amarelo", "azul"],
        pessoas: [
          { nome: "Ana", idade: 26, peso: 59 },
          { nome: "Jhonat", idade: 22, peso: 89 },
        ],
      },
    });
  </script>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/lista-v1.html)

- ## Acessando o índice Atual

  primeiro elemente é valor do interador exemplo nesse caso é **cor** e o segundo é índice em nosso exemplo é **i**

  ```
  <div id="app">
    <ul>
      <!-- cores é o objeto interavel -->
      <!-- primeiro vem o valor -->
      <!-- o segundo é índice -->
      <li v-for="(cor, i) in cores">{{i}}) {{cor}}</li>
      <!-- <li v-for="cor in cores" :teste="cor">{{cor}}</li> -->
    </ul>
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/lista-v2.html)

- ## Usando **v-for** com **template**

  o **template** é legal porque ele não vai rendeirrar na resuldado final colocando uma **tag** ou seja um menor custo computacional.

  ```
  <div id="app">
    <ul>
      <!-- cores é o objeto interavel -->
      <!-- primeiro vem o valor -->
      <!-- o segundo é índice -->
      <li v-for="(cor, i) in cores">{{i}}) {{cor}}</li>
      <!-- <li v-for="cor in cores" :teste="cor">{{cor}}</li> -->
    </ul>
    <!-- Hr coloca uma linha visivel -->
    <hr />
    <template v-for="(cor,i) in cores">
      <h1>{{ cor }}</h1>
      <p>{{ i }}</p>
    </template>
    <!-- <div v-for="(cor,i) in cores">
      <h1>{{ cor }}</h1>
      <p>{{ i }}</p>
    </div> -->
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/lista-v3.html)

- ## Interando objetos

  a ideia aqui é mostrar como percorrer objetos mais complexos como lista de pessoas etc...

  **for-v** for alinhados

  ```
  <div id="app">
    <ul>
      <!-- cores é o objeto interavel -->
      <!-- primeiro vem o valor -->
      <!-- o segundo é índice -->
      <li v-for="(cor, i) in cores">{{i}}) {{cor}}</li>
      <!-- <li v-for="cor in cores" :teste="cor">{{cor}}</li> -->
    </ul>
    <!-- Hr coloca uma linha visivel -->
    <hr />
    <template v-for="(cor,i) in cores">
      <h1>{{ cor }}</h1>
      <p>{{ i }}</p>
    </template>
    <ul>
      <!-- <li v-for="pessoa in pessoas">{{ pessoa.nome }}
      </li> -->
      <li v-for="pessoa in pessoas">
        <!-- span já é inline -->
        <span v-for="(valor, chave, index) in pessoa">
          {{ chave }}={{valor}} ({{index}})
        </span>
      </li>
    </ul>
  </div>

  <script>
    new Vue({
      el: "#app",
      data: {
        cores: ["vermelho", "verde", "amarelo", "azul"],
        pessoas: [
          { nome: "Ana", idade: 26, peso: 59 },
          { nome: "Jhonat", idade: 22, peso: 89 },
        ],
      },
    });
  </script>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/lista-v4.html)

- ## Interando uma Lista de Números

  como criar uma lista de número

  ```
  <div id="app">
    <hr />
    <span v-for="n in 10">{{n}} </span>
    <!-- <div v-for="n in 10">{{n}}</div> -->
  </div>

  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/lista-v5.html)

- ## Indentificando os elementos no v-for

  o vue cria um proxy para varificar a mudança na lista, é importante para vue dar uma diga para Vue quando a **lista** é alterada ou modificada usando **key** para dar a diga! ele usa o indexe do elementos. por exemplo se temos uma lista de produtos é importante é colocar o produto como dica para o vue.

  ```
  <div id="app">
    <ul>
      <!-- cores é o objeto interavel -->
      <!-- primeiro vem o valor -->
      <!-- o segundo é índice -->
      <li v-for="(cor, i) in cores" :key="cor">{{i}}) {{cor}}</li>
      <!-- <li v-for="cor in cores" :teste="cor">{{cor}}</li> -->
    </ul>
    <button @click="cores.push('branca')">Adicionar</button>
    <!-- Hr coloca uma linha visivel -->
  </div>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/condicionais-e-listas/lista-v5.html)
