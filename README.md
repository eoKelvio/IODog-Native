# IODog-Native

Este projeto tem como objetivo criar uma solução abrangente para o controle de liberação de ração por horário, integrando um back-end desenvolvido em Django Rest Framework, um front-end em React Native com TypeScript, e um projeto em Esp32. A necessidade surgiu da demanda de criar um aplicativo que oferecesse controle preciso sobre a alimentação de animais através da liberação de porções de ração em momentos específicos. Esse projeto foi feito com base na integração ADS - Senai com a Mecatrônica - Senai.

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


## Estrutura

Componentes:
- `Board`: foi criado para organizar os elementos na tela, ele já tem um estilo definido para que o padrão das telas seja mantido toda vez que ele é chamado.
- `PortionButton`: foi criado para que consiguamos mostrar e atualizar a quantidade de porções de ração que deverá ser liberada. Ao clicar no PortionButton um popUp abrirá para fazer a alteração. Esse componente realiza uma requisição (GET) para a API para que possa mostrar o número de porções sempre atualizado.
- `portionPopUp`: assim que aberto, permite que o número de porções seja alterado. Esse componente fas uma requisição (POST) para a API, assim salvando o número de porções desejado.
- `FoodLevel`: É o componete que nos mostra a quantidade de ração existente no estoque do dispenser de ração. Esse componente faz uma requisição (GET) para a API para poder manter os números atualizados.
- `NavButton`: é um botão criado para conseguirmos acessar a tela de de log's da aplicação e também para voltarmos para a tela principal.
