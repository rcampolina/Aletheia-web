import React, { FormEvent, useState } from "react";
import DateTimePicker from "../../Components/DateTimePicker";
import Input from "../../Components/Input";
import PageHeader from "../../Components/PageHeader";
import PrimaryButton from "../../Components/PrimaryButton";
import SelectRegister from "../../Components/SelectRegister";
import TextArea from "../../Components/TextArea";
import api from "../../services/api";

import './styles.css';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [birth, setBirth] = useState('');
  const [cpf, setCpf] = useState('');
  const [adress, setaAdress] = useState('');
  const [condition, setCondition] = useState('Normal');
  const [observations, setObservations] = useState('');
  const [attendance, setAttendance] = useState('');
    const [street, setStreet] = useState('');
		const [number, setNumber] = useState('');
		const [district, setDistrict] = useState('');
    const [complement, setComplement] = useState('');
		const [city, setCity] = useState('');
		const [state, setState] = useState('');
		const [country, setCountry] = useState('');
		const [code, setCode] = useState('');

  // async function getConditions(){
    
  //   const result = await api.get('conditions').then((res)=> res.data);
  //   console.log(result);
  //   return result.map((res: { id: number; value: string; label: string; }) => {
  //     return {id: res.id, value: res.value, label: res.label}
  //   });
  // }

  function handleSubmit(e: FormEvent){
    e.preventDefault();

    if ( 
      name === undefined || name === '' ||
      email === undefined || email === '' ||
      phone === undefined || phone === '' ||
      whatsapp === undefined || whatsapp === '' ||
      cpf === undefined || cpf === '' ||
      birth === undefined || birth === ''
    ) {
      alert('Campos obrigatórios devem ser preenchidos')
      return
    }

    api.post('users', {
      name,
      email,
      phone,
      whatsapp,
      cpf,
      birthDate: birth,
      condition,
      observations,
      adress: {
        street,
        number,
        district,
        complement,
        city,
        state,
        country,
        code
      }

    }).then(()=> {      
      setName('');
      setEmail('');
      setPhone('');
      setWhatsapp('');
      setBirth('');
      setCpf('');
      setaAdress('');
      setCondition('Normal');
      setObservations('');
      setStreet('');
      setNumber('');
      setDistrict('');
      setComplement('');
      setCity('');
      setState('');
      setCountry('');
      setCode('');
      alert('Cadastro realizado com sucesso!')
    }).catch((err)=> {
      alert('Erro no cadastro!')
      console.log(err);
    });
  }

  return (
    <div className="container">
      <PageHeader title="Cadastro de Auxiliado"></PageHeader>
      
        <form className="form-register" onSubmit={handleSubmit}>
          <Input name="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
          <Input name="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <Input name="phone" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
          <Input name="whatsapp" placeholder="Celular" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
          <Input name="birth" placeholder="Nascimento" type="date" value={birth} onChange={e => setBirth(e.target.value)} />
          <Input name="cpf" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
          <Input name="street" placeholder="Rua" value={street} onChange={e => setStreet(e.target.value)} />
          <Input name="number" placeholder="Número" value={number} onChange={e => setNumber(e.target.value)} />
          <Input name="complement" placeholder="Complemento" value={complement} onChange={e => setComplement(e.target.value)} />
          <Input name="district" placeholder="Bairro" value={district} onChange={e => setDistrict(e.target.value)} />
          <Input name="city" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
          <Input name="state" placeholder="Estado" value={state} onChange={e => setState(e.target.value)} />
          <Input name="country" placeholder="País" value={country} onChange={e => setCountry(e.target.value)} />
          <Input name="code" placeholder="CEP" value={code} onChange={e => setCode(e.target.value)} />
          <div className="container-select">
            <SelectRegister options={[]} value={condition} onChange={e => setCondition(e.target.value)}/>
          </div>
          <TextArea className="observations" name="observations" placeholder="Observações" value={observations} onChange={e => setObservations(e.target.value)} />
          <DateTimePicker name="attendance" value={attendance} onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setAttendance(e.target.value)}/>
          <div className="save">
            <PrimaryButton title="Salvar" type="submit"/>
          </div>
        </form>
        
    </div>
  );
}

export default Register;
