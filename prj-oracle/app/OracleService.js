// Llamada a las dependencias del proyecto
const Web3 = require('web3')
const Tx = require('ethereumjs-tx').Transaction
const fetch = require('node-fetch')

// Llamada a los archivos .json
const contractJson = require('../build/contracts/Oracle.json')

// Instancia de web3
const web3 = new Web3('ws://127.0.0.1:8545')

// Información de direcciones de Ganache
const addressContract = '0x627701aFE3F7AeF53d553dD6f1CAafa6F95D8FB7'
const contractInstance = new web3.eth.Contract(contractJson.abi, addressContract)
const privateKey = Buffer.from('531ab891383c01ab42a3cec69ba3ef0a770b9534f296eb98a3416e270be7cde6', 'hex')
const address = '0x2A17C858B1dFde0D6B3c14e9B3DFf9B108C44Fbd'

// Obtener el número de bloque
web3.eth.getBlockNumber()
    .then(() => listenEvent());

// Función: listenEvent()
function listenEvent() {
    contractInstance.events.__calbackNewData()
        .on('data', event => updateData())
        .on('error', err => console.log(err));
}

// Función: updateData()
function updateData() {
    // start_date = 2015-09-07
    // end_date = 2015-09-08
    // api_key = DEMO_KEY
    const url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=tojOEUqfqf5c6EfqYPe8bqjlBo3K6wzR57nGAHDg' 

    fetch(url)
    .then(response => response.json())
.then (json => setDataContract(json.element_count))}

// Función: setDataContract(_value)
function setDataContract(_value) {
    web3.eth.getTransactionCount(address, (err, txNum) => {
        contractInstance.methods.setNumberAsteroids(_value).estimateGas({ from: address }, (err, gasAmount) => {
            let rawTx = {
                nonce: web3.utils.toHex(txNum),
                gasPrice: web3.utils.toHex(web3.utils.toWei('1.4', 'gwei')),
                gasLimit: web3.utils.toHex(gasAmount),
                to: addressContract,
                value: '0x00',
                data: contractInstance.methods.setNumberAsteroids(_value).encodeABI()
            }

            const tx = new Tx(rawTx)
            tx.sign(privateKey)
            const serializedTx = tx.serialize().toString('hex')
            web3.eth.sendSignedTransaction('0x' + serializedTx)
        })
    })
}