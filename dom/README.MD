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

  # Eventos

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
