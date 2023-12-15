# IODog-Native

Este projeto tem como objetivo criar uma solução abrangente para o controle de liberação de ração por horário, integrando um back-end desenvolvido em Django Rest Framework, um front-end em React Native com TypeScript, e um projeto em Esp32. A necessidade surgiu da demanda de criar um aplicativo que oferecesse controle preciso sobre a alimentação de animais através da liberação de porções de ração em momentos específicos. Esse projeto foi feito com base na integração ADS - Senai com a Mecatrônica - Senai.

## Url Vídeo Pitch do Projeto
- https://drive.google.com/file/d/1UM_gGF5XoI0Be2sbC5jBupH_1-XiDRvM/view?usp=sharing

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) configurado no ambiente de desenvolvimento
- Aplicativo Expo Go instalado no seu dispositivo móvel

## Instalação

Tecnologias Utilizadas:
- Expo
- React Native
- TypeScript

Instale as dependências:

    npm i

Acesse a pasta do projeto:

    cd dog_project

Execução:

Abra o aplicativo Expo Go no seu dispositivo móvel e escaneie o QR code exibido no terminal ou na página web do Expo.


## Como Utilizar
Para criar um novo horário para liberação de ração, clique no botão de `+`, assim que clicar, abrirá um popUp. Nele você poderá digitar o horário desejado e confirmar, ou fechar, caso tenha aberto por engano.

Para editar um horário basta você ciclar no botão `editar` que está ao lado dos horários, assim que clicar, abrirá um popUp. Nele você pode digitar o novo horário ou deletar o horário selecionado.

Para editar o número de porções é possivel clicar em qualque parte do botão azul da porção. Assim que clicar, abrirá um popUp onde você pode digitar a nova quantia de porções ou fechar.

Para acessar a página de LOGs basta clicar no botão `Relatorios`, ele te levará para a página que conterá todas as informações de liberações passadas. Para voltar pro menu principal basta clicar no botão de mesmo nome.


## Estrutura

Componentes:
- `Container`: é um componente criado para alocar todos os elementos das telas.
- `Board`: foi criado para organizar os elementos na tela, ele já tem um estilo definido para que o padrão das telas seja mantido toda vez que ele é chamado.
- `HoursBox`: é onde colocamos as horas progamadas, onde editamos e criamos novos horários.
- `Times`: é o componente onde criamos o botão de editar e chamamos o popUp.
- `EditionPopUp`: é o popUp utilizado para editar um horário ou deleta-lo.
- `CreateHour`: é o componente onde criamos o botão de criar um novo horário e chamamos o popUp.
- `CreatePopUp`: é o popUp utilizado para criar um novo horário.
- `PortionButton`: foi criado para que consiguamos mostrar e atualizar a quantidade de porções de ração que deverá ser liberada. Ao clicar no PortionButton um popUp abrirá para fazer a alteração. Esse componente realiza uma requisição (GET) para a API para que possa mostrar o número de porções sempre atualizado.
- `portionPopUp`: assim que aberto, permite que o número de porções seja alterado. Esse componente fas uma requisição (POST) para a API, assim salvando o número de porções desejado.
- `LevelButon`: É o componete que nos mostra a quantidade de ração existente no estoque do dispenser de ração. Esse componente faz uma requisição (GET) para a API para poder manter os números atualizados. Ao cliclar nesse componente abrirá um popUp.
- `LevelPopUp`: assim que aberto, esse popUp permite que você faça um reset da procentagem de ração do estoque. 
- `NavButton`: é um botão criado para conseguirmos acessar a tela de de log's da aplicação e também para voltarmos para a tela principal.
- `LogBox`: é onde os logs aparecerão na aplicação, ele mostra o horário, a quantidade de porção, o nível da comida e se foi liberado ou não.
- `Index`: é a nossa tela principal.
- `Log`: é a nossa tela secundaria.

## Url Back-end
- API Root: https://eokelvio.pythonanywhere.com/
- GitHub: https://github.com/eoKelvio/IODog
