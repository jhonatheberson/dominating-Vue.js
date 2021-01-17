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
