import { Component, OnInit } from '@angular/core';
import { all_clients, Client, ClientIn, FormClient } from "./customer-data";
import { HttpClient } from '@angular/common/http';
import { ClientService } from './client-api.service'
import { Router } from '@angular/router';


interface StringDictionary {
  [index: string]: any;
}

@Component({
  selector: 'app-custormer-list',
  templateUrl: './custormer-list.component.html',
  styleUrls: ['./custormer-list.component.css']
})

export class CustormerListComponent implements OnInit {

  constructor(private client_api: ClientService, private router: Router) { }


  clients: Client[] = [];

  form_client: FormClient = {
    name: '',
    telephone: '',
    email: '',
    criteres: {
      localisation: "",
      code_postal: "",
      type_bien: [],
      max_price: '',
      min_price: '',
      max_surface: '',
      min_surface: ''
    },
    nb_found: 0,
    active: false
  };
  new_client: ClientIn = {
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
    _id: '',
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

  navigateTo(item: Client) {
    console.log(item)
    this.router.navigate(['/home/needs', item._id]);
  }

  ngOnInit(): void {
    this.loadClients();
  }

  loadClients(): void {
    this.client_api.getClients().subscribe(
      all_clients => this.clients = all_clients,
      error => console.error('Error loading clients', error))
  }

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

    this.new_client = this.formClientToClientIn(this.form_client);
    if (this.form_client.criteres.type_bien === null) {
      alert("Type de bien invalide !");
      return;
    }
    console.log(this.new_client)
    if (client != undefined) {
      this.client_api.updateClient(client._id, this.new_client).subscribe(
        client => console.log(client),
        error => console.error('Error updating clients', error)
      )
    }
    else {
      this.client_api.createClient(this.new_client).subscribe(
        client => console.log(client),
        error => console.error('Error creating client', error)
      )
    }
    this.loadClients();
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
    // const index = this.clients.indexOf(cli);
    // if (index !== -1) {
    //   this.clients.splice(index, 1);
    // }
    this.client_api.deleteClient(cli._id).subscribe(
      client => console.log(client),
      error => console.error('Error deleting client', error)
    )
    this.loadClients();

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
        type_bien: client.criteres.type_bien,
        max_price: client.criteres.max_price,
        min_price: client.criteres.min_price,
        max_surface: client.criteres.max_surface,
        min_surface: client.criteres.min_surface
      },
      nb_found: client.nb_found,
      active: client.active
    };
  }

  formClientToClientIn(formClient: FormClient): ClientIn {
    return {
      name: formClient.name,
      telephone: formClient.telephone,
      email: formClient.email,
      criteres: {
        localisation: formClient.criteres.localisation.split(', ').map(s => s.trim()),
        code_postal: formClient.criteres.code_postal.split(', ').map(s => s.trim()),
        type_bien: formClient.criteres.type_bien,
        max_price: String(formClient.criteres.max_price),
        min_price: String(formClient.criteres.min_price),
        max_surface: String(formClient.criteres.max_surface),
        min_surface: String(formClient.criteres.min_surface)
      },
      nb_found: formClient.nb_found,
      active: formClient.active
    };
  }

  // Assuming you have initialized form_client.criteres.type_bien as an array.
  // Initialize it like: form_client.criteres.type_bien = [];

  updateTypeBien(event: any, type: string) {
    if (event.target.checked) {
      // Add the type to the array if it's checked.
      this.form_client.criteres.type_bien.push(type);
    } else {
      // Remove the type from the array if it's unchecked.
      const index = this.form_client.criteres.type_bien.indexOf(type);
      if (index > -1) {
        this.form_client.criteres.type_bien.splice(index, 1);
      }
    }
  }

}
