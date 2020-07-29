# JSON2CSV

**Tier:** 1-Beginner

Desenvolvedores e usuários finais são especialistas em seus próprios domínios e, como tal,
cada um fala usando uma linguagem e terminologia específicas do domínio. Isso também se estende
às ferramentas usadas para manipular dados. Os desenvolvedores descobriram que o JSON é um
método universalmente aceito para transferir dados entre aplicativos. Fim
Os usuários, por outro lado, contam com planilhas para organizar e analisar dados.

O objetivo do JSON2CSV é ajudar a preencher a lacuna entre JSON e CSV,
converter JSON em CSV para facilitar a revisão de dados em uma planilha. isto
permite ao usuário colar JSON em uma caixa de texto para gerar seu CSV equivalente.

### Constraints

- Você não pode usar nenhuma biblioteca ou pacote projetado para executar esse tipo de converção
- Se você optar por implementar isso em JavaScript, não use loop complicado
  na sua primeira implementação. Em vez disso, use `Object.keys()` e `Object.values`
  para gerar CSV para o cabeçalho e as linhas de dados.
- Estruturas JSON aninhadas não são suportadas.

## User Stories

- [x] O usuário pode colar a sintaxe JSON em uma caixa de texto
- [x] O usuário pode clicar no botão 'Converter' para validar a caixa de texto JSON e convertê-la em CSV
- [x] O usuário pode ver o CSV convertido em outra caixa de textox
- [ ] O usuário pode ver uma mensagem de aviso se a caixa de texto JSON estiver vazia ou se não contiver JSON válido
- [ ] O usuário pode clicar no botão 'Limpar' para limpar o conteúdo das caixas de texto JSON e CSV

## Bonus features

- [ ] O usuário pode inserir o caminho para o arquivo JSON no sistema de arquivos local em uma caixa de texto
- [ ] O usuário pode clicar em um botão 'Abrir' para carregar o arquivo que contém o JSON na caixa de texto
- [ ] O usuário pode ver uma mensagem de aviso se o arquivo JSON não for encontrado
- [ ] O usuário pode inserir o caminho em que o arquivo CSV deve ser salvo em uma caixa de texto
- [ ] O usuário pode clicar no botão 'Salvar' para salvar o arquivo CSV no sistema de arquivos locais
- [ ] O usuário pode ver uma mensagem de aviso se a caixa de texto CSV estiver vazia ou se a operação de salvar falhar.
- [ ] O usuário pode converter dados CSV em JSON. Vejo [CSV2JSON](./CSV2JSON-App.md)

## Useful links and resources

- [Comma Separated Values (CSV)](https://en.wikipedia.org/wiki/Comma-separated_values)
- [JavaScript Object Notation (JSON)](https://www.json.org/)
- [MDN Javascript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Saving a file with pure JS](https://codepen.io/davidelrizzo/pen/cxsGb)
- [Reading files in Javascript](https://codepen.io/jduprey/details/xbale)

## Example projects

Tente concluir sua implementação JSON2CSV antes de revisar o exemplo
projeto (s).

- [JSON to CSV Converter](https://codepen.io/JFarrow/pen/umjGF)
- [JSV Converter](https://gpaiva00.github.io/json-csv)
