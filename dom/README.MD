- # DOM

  deritivas são propriedades que não é nativa do HTML

  ## v-bind

  é usado para processar link e interpolar corretamente ou associação do html e vue

  ```
  <a v-bind:href="link">Google</a
  ```

  ## v-once

  é usado quando o que estamos usando não precisa ficar rederenzando toda vez, ou seja, _v-once_, faz que seja renderizado apenas uma vez, não monitora mais, para ver se está executando.

  ```
  <p v-once>{{ titulo }}</p>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/template-v5.html)

  ## v-html

  deretiva para executar html puro na pagina, cuidado com **xss attack**, verificar de onde vem html é seguro

  o `<hr />` coloca a linha uma divisão

  ```
  <hr />
  <p v-html="linkHtml"></p>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/template-v6.html)

- # Eventos

  ## v-on

  é diretiva que fica escutando o evento que vem logo na sequencia, logo depois de `v-on:` tem que passar o nome da evento `click`

  ```
  <button v-on:click="somar">Somar 1</button>
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/eventos-v1.html)

  sempre que evento é executado o evento é passado por padrão

  ## obtendo dados do eventos

  o evento sempre é passado por parametros por padrão

  ```
  <p v-on:mousemove="atualizarXY">Mause: {{ x }} e {{ y }}</p>
   atualizarXY(event) {
        this.x = event.clientX;
        this.y = event.clientY;
      },
  ```

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/eventos-v2.html)

  ## passando nossos proprios argumentos com eventos

  `$event` é palavra reservada, mas `ev` não é palavra reservado então pode ser qualquer nome, e a ordem não importa dos parametros nesse caso.

```
 <button v-on:click="somar(5, $event)">Somar 1</button>
  somar(passo, ev) {
        console.log(passo, ev);
        this.contador += passo;
      },
```

## Modficadores de eventos

[documentação](https://vuejs.org/v2/guide/events.html#Event-Modifiers)

- ## stop

  serve para controlar quando sera executado ou parado o evento `stop` quando o evento `mousemove` executar nesse span ele vai parar esse mesmo evento

  ```
  <span v-on:mousemove.stop=""> PARAR AQUI!!!</span>
  ```

- ## prevent

  podemos também previnir um comportamento padrão do navegador ou seja aquilo que ele é para fazer não vai mais usandon `prevent`

  ```
  <a v-on:click.prevent="" href="http://google.com">Google</a>
  ```

  por exemplo nesse caso ele deveria lincar para o google que é comportamento padrão porém devido ao `prevent` não vai ao clicar ir para google

  [codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/eventos-v4.html)

## Eventos de teclado

[documentação](https://vuejs.org/v2/guide/events.html#Key-Modifiers)

## keyup

modificador de evento quando executado um avento do teclado

```
<input type="text" v-on:keyup="exibirAlerta" />
```

## enter

```
<input type="text" v-on:keyup.enter="exibirAlerta" />
```

também podemos encadear da seguinte forma

```
<input type="text" v-on:keyup.enter.alt="exibirAlerta" />
```

## keydown

modificador de evento quando a tecla do teclado é apertada

```
<input type="text" v-on:keydown.enter="armazenarValue" />

 armazenarValue(event) {
      console.log(event.target.value);
      this.valor = event.target.value;
    },
```

[codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/desafio-02)

ou posso usar sem declarar função dessa forma:

```
<input type="text" v-on:keyup="valor = $event.target.value">
```

[codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/desafio-02-resp)

## interpolação

o double mostart pode fazer expressões simples de uma linha exemplo:

```
  <p>{{ contador }}</p>
  <p>{{ contador > 10 ? 'Maior que 10': 'Menor do que 10'}}</p>
```

logo podemos beneficiar desse comportamento.

[codigo aqui](https://github.com/jhonatheberson/dominating-vuejs/blob/master/dom/interpolacao.html)

- # Usando Two-Way-Binding

  isso é usado para quando alterar o html támbem alterar o Vue.js, o inverso já é feito automaticamento.

  ```
    <p>{{ titulo }}</p>
    <input
      type="text"
      v-bind:value="titulo"
      v-on:input="titulo = $event.target.value"
    />

  ```

  existe uma diretiva de evento que já faz isso de uma vez, ou seja executa a `v-bind`, e `v-on` e se chama `v-model`

  ## v-model

  ```
  <input type="text" v-model="titulo" />
  ```

  isso garante o **Two-Way-Binding** dessa forma atualiza as duas direções: html => Vue,e
  Vue => Html

- # Propriedades computadas

metodos computados não são chamados como função e sim metodos, ele sabe qual os dados a qual quer alterar.
esse calculo é alterado somente quando é necessario, e depende dela.

```
<p>Resultado: {{ resultado }}</p>
```

dessa forma o `contador2` quando é executado não executa resultado.

```
 computed: {
      resultado() {
        console.log("metodo computed resultado chamado...");
        return this.contador >= 5 ? "Maior ou igual a 5" : "Menor que 5";
      },
    },
```
