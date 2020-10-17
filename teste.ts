let x = 1

const danilo = () => 1 + 1;


class Bola {
	constructor(_obs: string) {
        this.obs = _obs
    }

    public obs:string
}

interface Ser {
	cpf:string
    salvar(): void
}


abstract class Pessoa implements Ser {
    abstract atualizar(): boolean;

		cpf:string

		
    salvar(): void {
        console.log("salvando ...");
    }
}

class Cliente extends Pessoa{

	public nome:string

	private idade:number

	excluir(x,y){
		return x + y
	}

	atualizar(){
		return true
	}

	static Listar(): Cliente[] {
        let lista: Cliente[] = []
        return lista

        // let lista2 = [new Bola("teste")];
        // return lista2
	}
}

let cliente = new Cliente() 

// console.log(cliente.idade)
console.log(cliente.cpf)
console.log(cliente.nome)
console.log(Cliente.Listar())