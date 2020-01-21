import { Component, State, Event, EventEmitter, h } from "@stencil/core";

import PrevisaoOndasService from "../../services/previsao-ondas";

@Component({
  tag: "select-previsao-ondas",
  styleUrl: "select-previsao-ondas.css",
  shadow: true
})
export class SelectPrevisaoOndasComponent {
  @State() estados: Array<any> = [];
  @State() cidades: Array<any> = [];
  @State() previsoes: Array<any> = [];

  @Event() change: EventEmitter;

  public previsaoOndasService: PrevisaoOndasService;

  constructor() {
    this.previsaoOndasService = new PrevisaoOndasService();
  }

  async componentWillLoad() {
    this.estados = await this.previsaoOndasService.getEstados();
  }

  async handleSelectEstado(event) {
    this.cidades = await this.previsaoOndasService.getCidades(
      event.target.value
    );
  }

  async handleSelectCidade(event) {
    this.previsoes = await this.previsaoOndasService.getPrevisoes(
      event.target.value
    );

    this.change.emit(this.previsoes);
  }

  render() {
    return (
      <div>
        <select onInput={event => this.handleSelectEstado(event)}>
          {this.estados.map(item => (
            <option value={item.abreviatura}>{item.abreviatura}</option>
          ))}
        </select>
        {this.cidades.length ? (
          <select onInput={event => this.handleSelectCidade(event)}>
            {this.cidades.map(item => (
              <option value={item.id}>{item.cidade}</option>
            ))}
          </select>
        ) : null}
      </div>
    );
  }
}
