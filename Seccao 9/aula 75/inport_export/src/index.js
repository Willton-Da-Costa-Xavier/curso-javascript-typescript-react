//para importar algo utiliza-se o comando "import {variavel} from 'caminho do arquivo'"

//Quando tem variveis com o mesmo nome na hora de exportacao utiliza se "varivel que importou as variavel que quer que fique"

// Pode se importar tudo usando o comando "* as variavel que quer"

//pode se importar coisas "default" usando o comando "import variavel que quer from 'caminho do arquivo'"
import multiplica, {nome,sobrenome,idade,soma} from './modulo1';
console.log(multiplica(4,5));
console.log(nome,sobrenome,idade,soma(4,4));

