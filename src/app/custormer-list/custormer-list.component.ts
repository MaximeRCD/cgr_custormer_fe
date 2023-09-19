import { Component } from '@angular/core';
import { all_clients, Client, FormClient } from "./customer-data";

interface StringDictionary {
  [index: string]: any;
}

@Component({
  selector: 'app-custormer-list',
  templateUrl: './custormer-list.component.html',
  styleUrls: ['./custormer-list.component.css']
})

export class CustormerListComponent {

  clients = all_clients;

  form_client: FormClient = {
    name: '',
    telephone: '',
    email: '',
    criteres: {
      localisation: "",
      code_postal: "",
      type_bien: "",
      max_price: '',
      min_price: '',
      max_surface: '',
      min_surface: ''
    },
    nb_found: 0,
    active: false
  };
  new_client: Client = {
    name: '',
    telephone: '',
    email: '',
    criteres: {
      localisation: [],
      code_postal: [],
      type_bien: [],
      max_price: '',
      min_price: '',
      max_surface: '',
      min_surface: ''
    },
    nb_found: 0,
    active: false
  };
  current_client: Client = {
    name: '',
    telephone: '',
    email: '',
    criteres: {
      localisation: [],
      code_postal: [],
      type_bien: [],
      max_price: '',
      min_price: '',
      max_surface: '',
      min_surface: ''
    },
    nb_found: 0,
    active: false
  };

  getFilteredCriteria(criteres: any): string {
    const filtered: StringDictionary = {};
    for (const key in criteres) {
      if (criteres[key] && criteres[key] !== "") {
        filtered[key] = criteres[key];
      }
    }
    // Convert the filtered object to a formatted string.
    let result = JSON.stringify(filtered, null, 2);

    // Post-process to handle array formatting: Replace multiline array formatting with single-line.
    result = result.replace(/(\[\s+)([^\[\]]+)(\s+\])/g, (match, start, content, end) => {
      return '[' + content.trim().replace(/\s+/g, ' ') + ']';
    });

    return result;
  }

  onSubmit(client?: Client) {
    // Conversion des chaînes en tableaux :
    this.new_client = this.formClientToClient(this.form_client);
    if (this.form_client.criteres.type_bien === null) {
      alert("Type de bien invalide !");
      return;
    }
    if (client == undefined) {
      this.clients.push(this.new_client);
    }
    else {
      all_clients[all_clients.indexOf(client)] = this.new_client;
    }

    console.log(this.clients);

  }

  splitAndTrim(value: string): string[] {
    return value.split(',').map(item => item.trim());
  }

  validateAndSplitTypeBien(value: string): string[] {
    const types = this.splitAndTrim(value);
    for (const type of types) {
      if (!['maison', 'appartement', ''].includes(type)) {
        return [""];
      }
    }
    return types;
  }

  deleteClient(cli: Client) {
    const index = this.clients.indexOf(cli);
    if (index !== -1) {
      this.clients.splice(index, 1);
    }
  }

  editClient(cli: Client): void {
    this.current_client = cli;
    // Copy the details of cli to form_client for editing
    this.form_client = this.clientToFormClient(cli);
  }

  clientToFormClient(client: Client): FormClient {
    return {
      name: client.name,
      telephone: client.telephone,
      email: client.email,
      criteres: {
        localisation: client.criteres.localisation.join(', '),
        code_postal: client.criteres.code_postal.join(', '),
        type_bien: client.criteres.type_bien.join(', '),
        max_price: client.criteres.max_price,
        min_price: client.criteres.min_price,
        max_surface: client.criteres.max_surface,
        min_surface: client.criteres.min_surface
      },
      nb_found: client.nb_found,
      active: client.active
    };
  }

  formClientToClient(formClient: FormClient): Client {
    return {
      name: formClient.name,
      telephone: formClient.telephone,
      email: formClient.email,
      criteres: {
        localisation: formClient.criteres.localisation.split(', ').map(s => s.trim()),
        code_postal: formClient.criteres.code_postal.split(', ').map(s => s.trim()),
        type_bien: this.validateAndSplitTypeBien(formClient.criteres.type_bien),
        max_price: formClient.criteres.max_price,
        min_price: formClient.criteres.min_price,
        max_surface: formClient.criteres.max_surface,
        min_surface: formClient.criteres.min_surface
      },
      nb_found: formClient.nb_found,
      active: formClient.active
    };
  }

}
