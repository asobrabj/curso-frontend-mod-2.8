import React, { useState } from 'react';
import './App.css';

const FormVal = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {};

    if (!formData.nome) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.idade) {
      newErrors.idade = 'Idade é obrigatório';
    }

    if (!formData.genero) {
      newErrors.genero = 'O gênero é obrigatório';
    }

    if (!formData.email) {
      newErrors.email = 'Email é necessário';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Inválido email!';
    }

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, you can perform further actions here
      console.log('Form submitted successfully:', formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (

    <div className="container">
       <div className="container_form">
      <h2>Formulário com validação</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome.....: </label>
          <input type="text" name="nome" placeholder='digite seu nome' value={formData.nomee} onChange={handleChange} />
          {errors.nome && <div className="error">{errors.nome}</div>}
        </div>
        <div>
          <label>Idade......: </label>
          <input type="number" name="idade" placeholder='digite sua idade' value={formData.idade} onChange={handleChange} />
          {errors.idade && <div className="error">{errors.idade}</div>}
        </div>
        <div>
          <label>Gênero..: </label>
          <input type="radio" name="genero" value={formData.genero} onChange={handleChange} /> Masculino 
          <input type="radio" name="genero" value={formData.genero} onChange={handleChange} /> Feminino
          <input type="radio" name="genero" value={formData.genero} onChange={handleChange} /> Outros 
          {errors.genero && <div className="error">{errors.genero}</div>}
        </div>
        <div>
          <label>Email......: </label>
          <input type="email" name="email" placeholder='digite seu email' value={formData.email} onChange={handleChange} />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label>Estado civil:  </label>
          <input type="number" name="idade" placeholder='digite o estado civil' value={formData.idade} onChange={handleChange} />
          {errors.idade && <div className="error">{errors.idade}</div>}
        </div>
        <div>
          <label>Identidade: </label>
          <input type="number" name="idade" placeholder='digite seu RG' value={formData.idade} onChange={handleChange} />
          {errors.idade && <div className="error">{errors.idade}</div>}
        </div>
        <div>
          <label>CPF..............: </label>
          <input type="number" name="idade" placeholder='digite seu CPF' value={formData.idade} onChange={handleChange} />
          {errors.idade && <div className="error">{errors.idade}</div>}
        </div>
        <button type="submit">Submit</button> | <button type="reset">Limpar</button>
      </form>
    </div>
    <div className='container_print'>
    <p><strong>Nome:</strong> {formData.nome}</p>
      </div>
    </div>

  );
};

export default FormVal;
