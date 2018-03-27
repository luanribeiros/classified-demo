import React, { Component } from 'react'
import HeaderInterno from './HeaderInterno'

class NovoAnuncio extends Component {
  render() {
    return (
      <div>
        <HeaderInterno />
        <div className='container' style={{ paddingTop: '120px'}}>
          <h1>Novo Anúncio</h1>
          <form onSubmit={null}>
            <div className='form-group'>
              <label htmlFor='nome'>Nome</label>
              <input type='text' className='form-control' id='nome' placeholder='Nome' />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Descrição</label>
              <input type='text' className='form-control' id='descricao' placeholder='Descrição' />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Preço</label>
              <input type='text' className='form-control' id='preco' placeholder='Preço' />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Telefone</label>
              <input type='text' className='form-control' id='telefone' placeholder='Telefone' />
            </div>
            <div className='form-group'>
              <label htmlFor='nome'>Vendedor</label>
              <input type='text' className='form-control' id='vendedor' placeholder='Vendedor' />
            </div>
            <button type='submit' className='btn btn-primary'>Salvar Anúncio</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NovoAnuncio
