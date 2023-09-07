import React, { useState } from "react";

const Forme = () => {
  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    email: "",
    estado: "",
    identidade: "",
    cpf: "",
    genero: "",
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

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
      newErrors.nome = "Nome é obrigatório";
    }

    if (!formData.idade) {
      newErrors.idade = "Idade é obrigatória";
    }

    if (!formData.email) {
      newErrors.email = "Email é obrigatório";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.genero) {
      newErrors.genero = "Gênero é obrigatório";
    }

    if (Object.keys(newErrors).length === 0) {
      
      console.log("Formulário submetido com sucesso:", formData);
      setSubmittedData(formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="container">
      <div className="container_form">
        <h3>Formulário com Validação</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nome..........: </label>
            <input
              type="text"
              name="nome"
              placeholder="Digite seu Nome"
              value={formData.nome}
              onChange={handleChange}
            />
            {errors.nome && <div className="error">{errors.nome}</div>}
          </div>

          <div>
            <label>Idade...........: </label>
            <input
              type="text"
              name="idade"
              placeholder="Digite sua Idade"
              value={formData.idade}
              onChange={handleChange}
            />
            {errors.idade && <div className="error">{errors.idade}</div>}
          </div>

          <div>
            <label>Email............: </label>
            <input
              type="text"
              name="email"
              placeholder="Digite seu Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>

          <div>
            <label>Estado civil: </label>
            <input
              type="text"
              name="estado"
              placeholder="Digite seu Estado civil"
              value={formData.estado}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Identidade.: </label>
            <input
              type="number"
              name="identidade"
              placeholder="Digite sua Identidade"
              value={formData.identidade}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>CPF...............: </label>
            <input
              type="number"
              name="cpf"
              placeholder="Digite seu CPF"
              value={formData.cpf}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Gênero: </label>
            <input
              type="radio"
              name="genero"
              value="Masculino"
              onChange={handleChange}
            />{" "}
            <span className="gen">Masc</span>
            <input
              type="radio"
              name="genero"
              value="Feminino"
              onChange={handleChange}
            />{" "}
            <span className="gen">Fem</span>
            <input
              type="radio"
              name="genero"
              value="Outros"
              onChange={handleChange}
            />{" "}
            <span className="gen">Outros</span>
            {errors.genero && <div className="error">{errors.genero}</div>}
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>

      <div className="container_result">
        <h3>Resultado</h3>
        {submittedData ? (
          <>
            <p>
              <strong>Nome:</strong> {submittedData.nome}
            </p>
            <p>
              <strong>Idade:</strong> {submittedData.idade}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Estado civil:</strong> {submittedData.estado}
            </p>
            <p>
              <strong>Identidade:</strong> {submittedData.identidade}
            </p>
            <p>
              <strong>CPF:</strong> {submittedData.cpf}
            </p>
            <p>
              <strong>Gênero:</strong> {submittedData.genero}
            </p>
          </>
        ) : (
          <p>Por favor, preencha o formulário e envie.</p>
        )}
      </div>
    </div>
  );
};

export default Forme;
