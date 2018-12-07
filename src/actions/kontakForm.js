import axios from 'axios';

export function kontakForm(nama,email,pesan){
  return dispatch => {
    dispatch(loading())
    axios.post('http://neoal.xyz:3004/pesan',{
        nama:nama,
        email:email,
        pesan:pesan
    })
      .then(response=>{
        alert('pesanan anda terkirim')
        dispatch(success(response))
    })
    .catch(err=>{
        alert(err)
      dispatch(error(err))
    })
  }
}

export function loading(){
  return {
    type:'LOADING'
  }
}

export function success(payload){
  return{
    type:'SUCCESS',
    payload:payload
  }
}

export function error(){
  return{
    type:'ERROR'
  }
}