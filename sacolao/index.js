const express = require('express');
const cors = require('cors');


const app = express();
app.use(cors());
 

app.get("/sacolao", async (req,res) =>{

var fruta = "moranGO";
var frutas = [];
var qtt = 7;

for (let index = 0; index < qtt; index++) {
     frutas.push(fruta.toLowerCase());
}
  res.json(frutas);
});


app.get("/compras", async (req,res) =>{

  var compra = "R$ 15,90";
  var compras = [];
  var qtt = 8;
  
  for (let index = 0; index < qtt; index++) {
       compras.push(compra.toUpperCase());
  }
      res.json(compras);
    });


app.get("/fornecedor", async (req,res) =>{

    var Fornecedo = "Rua joviniano de oliveira, 54 JD Carumbe";
    var fornecedor = [];
    var qtt = 1;
    
    for (let index = 0; index < qtt; index++) {
         fornecedor.push(Fornecedo.toUpperCase());
    }
          res.json(fornecedor);
        });

        
app.get("/clientes", async (req,res) =>{

      var cliente = "Carlos";
      var clientes = [];
      var qtt = 8;
      
      for (let index = 0; index < qtt; index++) {
           clientes.push(cliente.toUpperCase());
      }
       res.json(clientes);
       });



app.get("/carros", async (req,res) =>{

        var carro = "Corolla";
        var carros = [];
        var qtt = 1;
        
        for (let index = 0; index < qtt; index++) {
             carros.push(carro.toUpperCase());
        }
         res.json(carros);
        });
        
        
app.get("/times", async (req,res) =>{

          var time = "Real Madrid";
          var times = [];
          var qtt = 1;
          
          for (let index = 0; index < qtt; index++) {
               times.push(time.toUpperCase());
          }
          res.json(times);
          });


app.get("/empregos", async (req,res) =>{
           
    var emprego = "Programador Senior";
    var empregos = [];
    var qtt = 1;
  
     for (let index = 0; index < qtt; index ++){
           empregos.push(emprego.toLocaleUpperCase());
      }
        res.json(empregos);
      });
 
          
app.get("/imoveis", async (req,res) =>{
 
  var emprego = "Mansao Alphaville";
  var empregos = [];4514
  var qtt = 1;

   for (let index = 0; index < qtt; index ++){
         empregos.push(emprego.toLocaleUpperCase());
  
      }
      res.json(empregos);
      });
          

app.get("/sorteio", async (req,res) =>{
      var sorteio = "Mega-Senna";
      var sorteios = [];
      var qtt = 1;
    
       for (let index = 0; index < qtt; index ++){
             sorteios.push(sorteio.toLocaleUpperCase());
      }
       res.json(sorteios);
      });
               

 app.get("/linguagem", async (req,res) =>{
       var linguage = "JavaScript";
       var linguagem = [];
       var qtt = 1;
    
        for (let index = 0; index < qtt; index ++){
              linguagem.push(linguage.toLocaleUpperCase());
          }
          res.json(linguagem);
          });



app.listen(3000, () => {
   console.log("estou rodando na porta 3000");

})

