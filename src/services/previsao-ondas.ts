class PrevisaoOndasService {
  url: String = "https://previsao-ondas.herokuapp.com";

  public async getEstados() {
    const response = await fetch(`${this.url}/litoral/estados`);
    const data = await response.json();
    return data.estados;
  }

  public async getCidades(estado: String) {
    const response = await fetch(`${this.url}/litoral/estado/${estado}`);
    const data = await response.json();
    return data.estado.cidades;
  }

  public async getPrevisoes(cidade: String) {
    const response = await fetch(`${this.url}/onda/cidade/${cidade}`);
    const data = await response.json();
    return data.estado.dias;
  }
}

export default PrevisaoOndasService;
