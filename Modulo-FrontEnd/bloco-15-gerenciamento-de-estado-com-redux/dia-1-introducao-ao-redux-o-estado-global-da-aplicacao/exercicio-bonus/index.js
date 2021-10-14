
// <!-- // 1- defina uma actionCreator -->

 const actionCreator = () => action;

//  <!-- 2- enviando uma action para um reducer -->
 store.dispatch(loginAction());

//  <!-- 3-criando um reducer para receber e manipular uma action -->

 switch(action.type) {
   case 'LOGIN':
    return{ login: true };
   default: 
    return state;
 }

 // 4 criando um reducer que aceita actions de tipos distintos

 switch(action.type) {
   case 'LOGIN':
    return { authenticated: true };
   case 'LOGOUT':
    return { authenticated: false};
   default: 
    return state;
 }

//  5-Usando const para as actions types.

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false,
};
const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        authenticated: true,
      };
    case LOGOUT:
      return {
        authenticated: false,
      };
    default:
      return state;
  }
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN,
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT,
  }
};

// 6- registrando um listener para o store;


//7 combinando multiplos reducers

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state -1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state= { authenticated: false }, action) => {
  switch(action.type){
    case LOGIN:
      return {
        authenticated: true,
      }
    case LOGOUT:
      return {
        authenticated: false,
      }
      default:
        return state;
  };
}

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
 
// 8 enviando dados atraves das actios

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    case ADD_NOTE:
      return action.text
    default:
      return state;
  }
};

const addNoteText = (note) => {
  return{ type: ADD_NOTE, text: note };
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// 9* criando um contador com redux 

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT: 
      return state - 1;
    default: 
      return state;
  }
};

const incAction = () => ({ type: INCREMENT });
const decAction = () => ({ type: DECREMENT });

const store = Redux.createStore(counterReducer);

// Esses desafios finais descrevem vários métodos de aplicação do princípio-chave da imutabilidade de 
//estado no Redux. O estado imutável significa que você nunca modifica o estado diretamente; em vez disso, 
//você retorna uma nova cópia do estado.

// Se você tomou um instantâneo do estado de um aplicativo Redux ao longo do tempo, você veria algo como
// state 1, state 2, state 3, state 4, ...e assim por diante, onde cada estado pode ser semelhante ao 
//passado, mas cada um é uma peça distinta de dados. Essa imutabilidade, na verdade, é o que fornece 
//recursos como depuração de viagem no tempo, sobre os quais você já deve ter ouvido falar.

// Redux não impõe ativamente a imutabilidade de estado em sua loja ou redutores, essa responsabilidade 
//recai sobre o programador. Felizmente, JavaScript (especialmente ES6) oferece várias ferramentas úteis 
//que você pode usar para fazer cumprir a imutabilidade do seu estado, se é um string, number, array, ou object. Observe que strings e números são valores primitivos e imutáveis ​​por natureza. Em outras palavras, 3 é sempre 3. Você não pode alterar o valor do número 3. Um arrayou object, entretanto, é mutável. Na prática, seu estado provavelmente consistirá em um arrayou object, 
//pois essas são estruturas de dados úteis para representar muitos tipos de informações.

// Existe um storee reducerno editor de código para gerenciar itens de tarefas pendentes. 
//Termine de escrever o ADD_TO_DOcaso no redutor para anexar uma nova tarefa ao estado. 
//Existem algumas maneiras de fazer isso com JavaScript ou ES6 padrão. Veja se você consegue encontrar
// uma maneira de retornar uma nova matriz com o item de action.todoanexado ao final.
 
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [...todos, action.todo];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo,
  }
}

const store = Redux.createStore(immutableReducer);

// 11 usando o spreed operator para manter a imutabilidade do state;

const ADD_TO_DO = 'ADD_TO_DO';

const immutableReducer = (state = ['Do not mutate state!'], action) => {
   switch(action.type) {
     case ADD_TO_DO: 
       return [...state, action.todo];
     default:
       return state;
   }
};
// duvida nesta funçao e como o reducer acessa o paramentro desta funcao ja q ela esta fora do escopo
const addTodo = (todo) => ({ 
  type: ADD_TO_DO,
  todo});

  const store = Redux.createStore(immutableReducer);

  //12 removendo itens do array preservando a imutabilidade

  const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch(action.type) {
      case 'REMOVE_ITEM':
        return state.filter((_number, index) => index !== action.index);
      default:
        return state;
    }
  }
  //duvida desta funcao e como o reducer esta removendo itens do array
  const removeItem = (index) => ({
    type: 'REMOVE_ITEM',
    index});
  
  const store = Redux.createStore(immutableReducer);

  // 13 trabalhando com objetos assing avaliar resolução tirada do gabarito

  const ONLINE = 'ONLINE';
  const defaultState = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp',
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch(action.type) {
      case ONLINE:
        return Object.assign({}, state, {
          status: 'online'
        });
      default:
        return state;
    }
  };
  
  const wakeUp = () => ({
    type: ONLINE});
  
  const store = Redux.createStore(immutableReducer);