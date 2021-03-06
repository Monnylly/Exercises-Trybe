
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

// Esses desafios finais descrevem v??rios m??todos de aplica????o do princ??pio-chave da imutabilidade de 
//estado no Redux. O estado imut??vel significa que voc?? nunca modifica o estado diretamente; em vez disso, 
//voc?? retorna uma nova c??pia do estado.

// Se voc?? tomou um instant??neo do estado de um aplicativo Redux ao longo do tempo, voc?? veria algo como
// state 1, state 2, state 3, state 4, ...e assim por diante, onde cada estado pode ser semelhante ao 
//passado, mas cada um ?? uma pe??a distinta de dados. Essa imutabilidade, na verdade, ?? o que fornece 
//recursos como depura????o de viagem no tempo, sobre os quais voc?? j?? deve ter ouvido falar.

// Redux n??o imp??e ativamente a imutabilidade de estado em sua loja ou redutores, essa responsabilidade 
//recai sobre o programador. Felizmente, JavaScript (especialmente ES6) oferece v??rias ferramentas ??teis 
//que voc?? pode usar para fazer cumprir a imutabilidade do seu estado, se ?? um string, number, array, ou object. Observe que strings e n??meros s??o valores primitivos e imut??veis ??????por natureza. Em outras palavras, 3 ?? sempre 3. Voc?? n??o pode alterar o valor do n??mero 3. Um arrayou object, entretanto, ?? mut??vel. Na pr??tica, seu estado provavelmente consistir?? em um arrayou object, 
//pois essas s??o estruturas de dados ??teis para representar muitos tipos de informa????es.

// Existe um storee reducerno editor de c??digo para gerenciar itens de tarefas pendentes. 
//Termine de escrever o ADD_TO_DOcaso no redutor para anexar uma nova tarefa ao estado. 
//Existem algumas maneiras de fazer isso com JavaScript ou ES6 padr??o. Veja se voc?? consegue encontrar
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
// duvida nesta fun??ao e como o reducer acessa o paramentro desta funcao ja q ela esta fora do escopo
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

  // 13 trabalhando com objetos assing avaliar resolu????o tirada do gabarito

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