# Tarefa-3.1b

The aim of this work is to develop skills in creating wireframes, mockups and prototypes. To this end, I was asked to add two new views to the Animalec project that comes as an example in the book "Desenvolvimento Web Avançadot"(1) .

(1) - **DESENVOLVIMENTO AVANÇADO PARA A WEB** - DO FRONT-END AO BACK-END\
 _Ricardo Queirós | Filipe Portela_\
Link: [https://www.fca.pt/pt/catalogo/informatica/tecnologias-programacao-web/desenvolvimento-avancado-para-a-web/](https://www.fca.pt/pt/catalogo/informatica/tecnologias-programacao-web/desenvolvimento-avancado-para-a-web/)\
Ref:. Filipe Portela, Ricardo Queirós (2020). Desenvolvimento Avançado para a Web - Do front-end ao back-end. 1ª edição, FCA, ISBN: 978-972-722-915-4.

## Wireframe and Mockups

The work was divided into several tasks, two of which were the creation of a wireframe and a mockup. The work carried out can be consulted via the pdf's in the `Wireframe_Mockups` folder or via the links below.

### Wireframe

[https://www.figma.com/file/eAZ7gAwJsVnCvem8fEJLxt/PWA---Tarefa-3.1?type=design&node-id=0-1&mode=design](https://www.figma.com/file/eAZ7gAwJsVnCvem8fEJLxt/PWA---Tarefa-3.1?type=design&node-id=0-1&mode=design)

### Mockup

[https://www.figma.com/file/eAZ7gAwJsVnCvem8fEJLxt/PWA---Tarefa-3.1?type=design&node-id=19-292&mode=design](https://www.figma.com/file/eAZ7gAwJsVnCvem8fEJLxt/PWA---Tarefa-3.1?type=design&node-id=19-292&mode=design)

## Prototype HTML and CSS version

Following on from the Wireframe and Mockup, the prototype was developed in html and css. The aim of this prototype is to provide a visualization of what the project will look like via the browser.

The project can be viewed via the link: [https://tarefa-3-1.onrender.com/](https://tarefa-3-1.onrender.com/)

## Functional Prototype - VueJs

This prototype aimed to test various functionalities that the new views must accommodate, such as:

- Listing all the elements
- Viewing more information about ...
- Adding a new ...
- Editing a ...
- Removing ...

To test these functionalities, you need to have installed, in addition to Node:

- `json_server` - [https://github.com/typicode/json-server](https://github.com/typicode/json-server)
- `serve` - [https://cli.vuejs.org/guide/deployment.html](https://cli.vuejs.org/guide/deployment.html)

The code for this prototype can be found in the VueJs_Version folder.

### To test the prototype, you should follow these steps:

1. Navigate to the VueJs_Version folder:

    ```bash
    cd VueJs_Version
    ```

2. Ensure that Node.js is installed on your machine.

3. Install the necessary dependencies by running the following commands in the
   terminal:

    ```bash
    npm install -g json-server
    npm install -g serve
    ```

4. Start the JSON server by running:

    ```bash
    json-server db/db.json
    ```

5. Open another terminal window, navigate to the VueJs_Version folder again:

    ```bash
    cd VueJs_Version
    ```
6. Start the Vue.js development server by running:
   
    ```bash
    serve -s dist/
    ```
7. Open your browser and go to the specified URL to interact with the prototype.

Another way to test the project is by using the Vue.js project. You need to run 
the `json-server` for the application to work as expected.

## Run Vue.js Project (Node.js <= 16)

1. **Install Node.js (<= 16):**
   Download and install Node.js version 16 or lower from [Node.js official website](https://nodejs.org/).

2. **Install Vue CLI:**
   Run `npm install -g @vue/cli` to install Vue CLI globally.

3. **Navigate to Project:**
   Use `cd VueJs_Version` to go to project directory.

4. **Install Dependencies:**
   Run `npm install` to install project dependencies.

    > Attention: You should run the json-server if you haven't already. See how to do it in the steps above.

5. **Run Vue.js Server:**
   Start the server with `npm run serve`.

6. **Access Your App:**
   Open your browser and visit the provided URL.

