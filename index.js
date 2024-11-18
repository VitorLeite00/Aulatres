import express from 'express';
import bodyParser from 'body-parser';


const app = express();
const port = 3005;

app.use(bodyParser.urlencoded({ extended: true }));


let empresas = [];


app.get('/', (req, res) => {
  res.send(`
    <h1>Cadastro de Empresas</h1>
    <form method="POST" action="/cadastro">
      <label>CNPJ:</label><br>
      <input type="text" name="cnpj" required><br>
      
      <label>Razão Social:</label><br>
      <input type="text" name="razaoSocial" required><br>
      
      <label>Nome Fantasia:</label><br>
      <input type="text" name="nomeFantasia" required><br>
      
      <label>Endereço:</label><br>
      <input type="text" name="endereco" required><br>
      
      <label>Cidade:</label><br>
      <input type="text" name="cidade" required><br>
      
      <label>UF:</label><br>
      <input type="text" name="uf" required><br>
      
      <label>CEP:</label><br>
      <input type="text" name="cep" required><br>
      
      <label>E-mail:</label><br>
      <input type="email" name="email" required><br>
      
      <label>Telefone:</label><br>
      <input type="text" name="telefone" required><br><br>
      
      <button type="submit">Cadastrar</button>
    </form>
    
    <h2>Empresas Cadastradas</h2>
    <ul>
      ${empresas.map(empresa => `
        <li>
          ${empresa.razaoSocial} - ${empresa.nomeFantasia} - ${empresa.cnpj}
        </li>
      `).join('')}
    </ul>
  `);
});


app.post('/cadastro', (req, res) => {
  const { cnpj, razaoSocial, nomeFantasia, endereco, cidade, uf, cep, email, telefone } = req.body;

 
  if (!cnpj || !razaoSocial || !nomeFantasia || !endereco || !cidade || !uf || !cep || !email || !telefone) {
    return res.send(`
      <h1>Cadastro de Empresas</h1>
      <p style="color: red;">Todos os campos são obrigatórios!</p>
      <form method="POST" action="/cadastro">
        <label>CNPJ:</label><br>
        <input type="text" name="cnpj" value="${cnpj}" required><br>
        
        <label>Razão Social:</label><br>
        <input type="text" name="razaoSocial" value="${razaoSocial}" required><br>
        
        <label>Nome Fantasia:</label><br>
        <input type="text" name="nomeFantasia" value="${nomeFantasia}" required><br>
        
        <label>Endereço:</label><br>
        <input type="text" name="endereco" value="${endereco}" required><br>
        
        <label>Cidade:</label><br>
        <input type="text" name="cidade" value="${cidade}" required><br>
        
        <label>UF:</label><br>
        <input type="text" name="uf" value="${uf}" required><br>
        
        <label>CEP:</label><br>
        <input type="text" name="cep" value="${cep}" required><br>
        
        <label>E-mail:</label><br>
        <input type="email" name="email" value="${email}" required><br>
        
        <label>Telefone:</label><br>
        <input type="text" name="telefone" value="${telefone}" required><br><br>
        
        <button type="submit">Cadastrar</button>
      </form>
      <h2>Empresas Cadastradas</h2>
      <ul>
        ${empresas.map(empresa => `
          <li>
            ${empresa.razaoSocial} - ${empresa.nomeFantasia} - ${empresa.cnpj}
          </li>
        `).join('')}
      </ul>
    `);
  }


  empresas.push({ cnpj, razaoSocial, nomeFantasia, endereco, cidade, uf, cep, email, telefone });


  res.redirect('/');
});


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
