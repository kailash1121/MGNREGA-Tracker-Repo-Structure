const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

let employees=[],workEntries=[],payments=[],notifications=[];

app.post('/api/login',(req,res)=>{const{mobile,role}=req.body;if(!mobile)return res.status(400).json({error:'mobile required'});res.json({token:'mock-token-'+mobile,role,mobile});});
app.get('/api/employees',(req,res)=>res.json(employees));
app.post('/api/employees',(req,res)=>{const e={employee_id:employees.length+1,...req.body};employees.push(e);res.json(e);});
app.get('/api/employees/:id',(req,res)=>{const id=parseInt(req.params.id);const e=employees.find(x=>x.employee_id===id);if(!e)return res.status(404).json({error:'not found'});res.json(e);});
app.post('/api/work',(req,res)=>{const w={work_id:workEntries.length+1,...req.body};workEntries.push(w);res.json(w);});
app.get('/api/work/:employee_id',(req,res)=>{const id=parseInt(req.params.employee_id);res.json(workEntries.filter(w=>w.employee_id===id));});
app.post('/api/payments',(req,res)=>{const p={payment_id:payments.length+1,...req.body};payments.push(p);res.json(p);});
app.get('/api/payments/:employee_id',(req,res)=>{const id=parseInt(req.params.employee_id);res.json(payments.filter(p=>p.employee_id===id));});
app.get('/api/notifications',(req,res)=>res.json(notifications));
app.post('/api/notifications',(req,res)=>{const n={notification_id:notifications.length+1,...req.body};notifications.push(n);res.json(n);});

const PORT=process.env.PORT||4000;
app.listen(PORT,()=>console.log('Server started on port '+PORT));
