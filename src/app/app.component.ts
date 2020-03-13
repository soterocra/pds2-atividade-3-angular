import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pessoas: any = [
    {id: 1, nome: 'joão', salario: 5000},
    {id: 2, nome: 'maria', salario: 1000},
    {id: 3, nome: 'jose', salario: 2000},
    {id: 4, nome: 'pedro', salario: 3000},
    {id: 5, nome: 'felipe', salario: 10000},
    {id: 6, nome: 'carlos', salario: 800}    
  ]

  getValorTotal(): Number {
    return this.pessoas.reduce((soma, pessoa) => soma + pessoa.salario, 0)
  }

  nomes: string[] = ['joão', 'maria', 'josé', 'pedro', 'felipe', 'carlos'];
  nomesFiltro: string[];
  
  buscar(valor: string) {
    // metodo 1
    // for (var i = 0; i < this.nomes.length; i++) {
    //   if (this.nomes[i].toLowerCase().includes(valor.toLowerCase())) {
    //     this.nomesFiltro.push(this.nomes[i]);
    //   }
    // }

    // metodo 2
    // let temp = [];
    // this.nomes.forEach(buscarItem);
    // function buscarItem(nome) {
    //   if (nome.toLowerCase().includes(valor.toLowerCase())) {
    //     temp.push(nome);
    //   }
    // }
    // this.nomesFiltro = temp;
    
    // metodo 3
    // this.nomesFiltro = this.nomes.filter(function(nome) {
    //   return nome.toLowerCase().includes(valor.toLowerCase());
    // })

    // metodo 4
    this.nomesFiltro = this.nomes.filter((nome) => nome.toLowerCase().includes(valor.toLowerCase()));
  }

  buscarId(id) {
    return this.pessoas.find(pessoa => pessoa.id == id);
  }

  aumentarSalario(percentual) {
    this.pessoas.map(pessoa => pessoa.salario += pessoa.salario * percentual / 100)
  }

  verificaSalario(valor: number) {
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }

  buscarCampos(criterio: string) {
    return this.pessoas.filter((pessoa) => Object.keys(pessoa).some(chave => pessoa[chave].toString().includes(criterio)))
  }

}
