import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import * as M from 'materialize-css';
import {ApiConfigProvider} from "../../providers/api-config/api-config";
import { IonicPage, NavController, NavParams, Alert } from 'ionic-angular';
import { shiftInitState } from '@angular/core/src/view';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { ThrowStmt } from '@angular/compiler';



/**
 * Generated class for the UserConfigComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-config',
  templateUrl: 'user-config.html'
})
export class UserConfigComponent {

  cliente: any = {};
  productos: any = [{}];
  Snacks: any = [];
  Dulces: any = [];
  Bebidas: any = [];
  Alimentos: any = [];
  bloqueados : any = [{}];
  bloqueados_temp : any = [{id_cli:2}];


  constructor(public navCtrl: NavController, private apiConfig: ApiConfigProvider) {
	
  }
  

  ngOnInit()
  {
    $(document).ready(function() {
      var valor = true;

      M.updateTextFields();

      $('#sw').prop('checked', true);

      $('.productoselect').click(function () {
        $(this).toggleClass('active');
      });

      $('#sw').click(function(){
        if(valor == true)
        {
          $("#presupuestobtn").prop('disabled', true);
          $("#presupuesto").prop('disabled', true);
          valor = false;

        }
        else if(valor == false)
        {
          valor = true;
          $('#presupuestobtn').prop('disabled',false);
          $('#presupuesto').prop('disabled',false);
        }
        
      }); 
      
    });

    this.apiConfig.getClientes({id: 2})
	      .subscribe( 
	        res => {
            this.cliente= res[0];
            this.cliente.id_cliente = 2;
            //console.log(this.cliente.presupuesto);
            $(function(){
              M.updateTextFields();
            });
	        },
	        err => console.log(err)
        );
  
    this.apiConfig.getProductos()
    .subscribe( 
      res => {
        this.productos= res;
        console.log('PRODUCTOS2222222');
        console.log(this.productos);
        let tamaño = this.productos.length;
        for(let x=0; x<tamaño; x++)
          {
            if(this.productos[x].id_categoria==1)
            {
              this.Snacks.push(this.productos[x]);
            }
            else if(this.productos[x].id_categoria==2)
            {
              this.Dulces.push(this.productos[x]);
            }
            else if(this.productos[x].id_categoria==3)
            {
              this.Bebidas.push(this.productos[x]);
            }
            else if(this.productos[x].id_categoria==4)
            {
              this.Alimentos.push(this.productos[x]);
            }
          }
         // console.log(this.Snacks);
         // console.log(this.Dulces);
          //console.log(this.Bebidas);
          //console.log(this.Alimentos);
      },
      err => console.log(err)
    );

    this.apiConfig.getBloqueados({id_cliente:2})
    .subscribe( 
      res => {
        this.bloqueados = res;
        console.log('BLOQUEADOS');
        console.log(this.bloqueados);
        let prod_length = this.productos.length;
        let bloc_length = this.bloqueados.length;
        for(let i=0; i<bloc_length;i++)
        {
          for(let j=0; j<prod_length; j++)
          {
            if(this.bloqueados[i].id_producto == this.productos[j].id)
            {
              this.productos[j].block = true;
              this.bloqueados_temp.push(this.productos[j].id);
            }
          }
        }
        console.log(this.productos);
      },
      err => console.log(err)
    );
  }

  public guardarBlock()
  {
    this.apiConfig.updateBlock(this.bloqueados_temp)
    .subscribe( 
      res => {
        M.toast({html: 'Prohibición configurada con éxito!'})
        //alert('Productos bloqueados con exito!');
      },
      err => console.log(err)
    );
  }

  public updatePresupuesto()
  {
    console.log(this.cliente);
    this.apiConfig.updatePresupuesto(this.cliente)
    .subscribe( 
      res => {
       // if(res[0].result)
       // {
        //  M.toast({html: 'Presupuesto modificado con éxito!'})
       // }
        //alert('Productos bloqueados con exito!');
        console.log(res);
      },
      err => console.log(err)
    );
  }
 

  tab=[true,false,false,false];
  
  public tabs(num:any)
  {
    for(let i=0;i<=3;i++)
    {
      this.tab[i]=false;
    }
    this.tab[num]=true;

  }

 

  public objetos(id_producto: any)
  {
      if (this.bloqueados_temp.indexOf(id_producto) === -1) {
        this.bloqueados_temp.push(id_producto);
        console.log('La nueva colección de productos bloqueados es: ' + this.bloqueados_temp);
      } 
      else if (this.bloqueados_temp.indexOf(id_producto) > -1) {
        this.bloqueados_temp.splice(this.bloqueados_temp.indexOf(id_producto), 1);
        console.log(this.bloqueados_temp);
      }
  }

}

      

