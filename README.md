# Introducción a Dapps
- Dapps son aplicaciones descentralizadas que operan en una red blockchain, lo que las hace resistentes a la censura y al control centralizado.
- A diferencia de las aplicaciones tradicionales, las Dapps no dependen de servidores centrales, sino que utilizan contratos inteligentes para ejecutar su lógica de negocio.
- Las Dapps ofrecen mayor transparencia, seguridad y autonomía a los usuarios, ya que

## Ventajas de las Dapps
- Transparencia: Todas las transacciones y operaciones son visibles en la blockchain.
- Seguridad: La naturaleza descentralizada de las Dapps las hace menos vulnerables a ataques y fallos.
- Autonomía: Los usuarios tienen control total sobre sus datos y activos.
- Resistencia a la censura: Al no depender de una entidad central, las Dapps son menos susceptibles a la censura.

## Introducción a Ganache
- Ganache es una herramienta de desarrollo para Ethereum que permite a los desarrolladores crear, probar y depurar aplicaciones descentralizadas (dApps) de manera local. Proporciona una blockchain personal que simula el comportamiento de la red Ethereum, lo que facilita el desarrollo y las pruebas sin necesidad de interactuar con la red principal o testnet.

## Truffle
- Truffle es un entorno de desarrollo, marco de pruebas y canalizador de activos para Ethereum, que facilita la creación y gestión de contratos inteligentes y dApps. Proporciona herramientas para compilar, desplegar y probar contratos inteligentes, así como para gestionar las migraciones de contratos en diferentes redes blockchain. las reglas y operaciones están codificadas en contratos inteligentes.
- Funcionalidades principales:
  1. Compilación de contratos inteligentes: Truffle permite compilar contratos escritos en Solidity, el lenguaje de programación más común para Ethereum.
  2. Testeo: Truffle incluye un marco de pruebas que facilita la escritura y ejecución de pruebas automatizadas para contratos inteligentes.
  3. Migraciones: gestiona el despliegue de contratos inteligentes en diferentes redes, asegurando que las migraciones se realicen de manera ordenada y controlada.
  4. Trabaja con múltiples redes: facilita la conexión y el despliegue de contratos en diversas redes Ethereum, incluyendo mainnet, testnets y blockchains locales como Ganache.
  5. Gestión de paquetes: npm para instalar y gestionar dependencias de proyectos.
  6. Interfaz de línea de comandos (CLI): Truffle proporciona una CLI que permite a los desarrolladores interactuar con sus proyectos de manera eficiente, ejecutando comandos para compilar, desplegar y probar contratos inteligentes.
  7. Permite ejecutar scripts personalizados para automatizar tareas comunes en el desarrollo de dApps.

## Comandos de Truffle
- `truffle init`: Inicializa un nuevo proyecto de Truffle en el directorio actual.
- `truffle compile`: Compila los contratos inteligentes en el proyecto.
- `truffle migrate`: Despliega los contratos inteligentes a la red especificada.
- `truffle test`: Ejecuta las pruebas definidas para los contratos inteligentes.
- `truffle console`: Abre una consola interactiva para interactuar con los contratos desplegados.
- `truffle develop`: Inicia una red de desarrollo local y abre una consola interactiva.
- `truffle create contract <ContractName>`: Crea un nuevo archivo de contrato inteligente con el nombre especificado.
- `truffle create migration <MigrationName>`: Crea un nuevo archivo de migración con el nombre especificado.
- `truffle create test <TestName>`: Crea un nuevo archivo de prueba con el nombre especificado.

## Web3.js
- Es una biblioteca de JavaScript que permite a los desarrolladores interactuar con la blockchain de Ethereum. Proporciona una interfaz para enviar transacciones, leer datos de contratos inteligentes y suscribirse a eventos en la red Ethereum.

## Oráculos
- Los oráculos son servicios que proporcionan datos externos a los contratos inteligentes en la blockchain. Actúan como intermediarios entre la blockchain y el mundo exterior, permitiendo que los contratos inteligentes accedan a información que no está disponible en la cadena, como datos de precios, resultados de eventos o información meteorológica.

## Flujo de Oráculos
- 1. Un contrato inteligente emite una solicitud de datos a un oráculo.
- 2. El oráculo recibe la solicitud y obtiene los datos necesarios del mundo exterior.
- 3. El oráculo envía los datos de vuelta al contrato inteligente.
- 4. El contrato inteligente utiliza los datos proporcionados por el oráculo para ejecutar su lógica.
- Smart contract -> Solicitud de datos -> Oráculo -> Datos externos -> Respuesta al smart contract

## Términos comunes
- Blockchain: Una base de datos distribuida que almacena datos en bloques encadenados y es resistente a la modificación.
- Contrato inteligente: Un programa que se ejecuta en la blockchain y que define reglas y condiciones para las transacciones.
- Token: Una unidad de valor emitida por una Dapp que puede representar activos, derechos o acceso a servicios.
- Wallet: Una herramienta que permite a los usuarios almacenar y gestionar sus criptomonedas y tokens.
- Gas: Una unidad que mide la cantidad de trabajo computacional necesario para ejecutar operaciones en la blockchain.
- Nodo: Un dispositivo que participa en la red blockchain, validando y propagando transacciones.
- Consenso: Un mecanismo mediante el cual los nodos de la red acuerdan el estado de la blockchain.
- DAO (Organización Autónoma Descentralizada): Una organización gestionada por reglas codificadas en contratos inteligentes, sin una autoridad central.
- DEX (Intercambio Descentralizado): Una plataforma que permite a los usuarios intercambiar criptomonedas directamente entre ellos sin intermediarios.
- ICO (Oferta Inicial de Monedas): Un método de recaudación de fondos en el que se venden tokens a los inversores a cambio de criptomonedas.
- Web3: La próxima generación de la web que integra tecnologías descentralizadas como blockchain y Dapps.
- IPFS (Sistema de Archivos Interplanetario): Un protocolo de almacenamiento y compartición de archivos descentralizado.
- Oráculo: Un servicio que proporciona datos externos a los contratos inteligentes en la blockchain.
- Testnet: Una red blockchain de prueba utilizada para experimentar y desarrollar Dapps sin riesgos financieros.
- Mainnet: La red blockchain principal donde las transacciones tienen valor real y las Dapps están en producción.
- Fork: Una bifurcación en la blockchain que puede resultar en una nueva versión de la cadena con reglas diferentes.
- Criptomoneda: Una moneda digital que utiliza criptografía
- Metamask: Una extensión de navegador que actúa como una wallet para interactuar con
- transactionHash: Es un identificador único asignado a cada transacción en la blockchain. Este hash es generado mediante un algoritmo criptográfico y sirve para rastrear y verificar la transacción específica dentro de la red.
- blockHash: Es un identificador único asignado a cada bloque en la blockchain. Similar al transactionHash, el blockHash es generado mediante un algoritmo criptográfico y sirve para identificar y verificar un bloque específico dentro de la cadena de bloques.
- blockNumber: Es un número secuencial que indica la posición de un bloque dentro de la blockchain. Cada bloque tiene un blockNumber único que comienza desde cero (el bloque génesis) y aumenta con cada nuevo bloque añadido a la cadena.
- from: Es la dirección de la cuenta que inicia una transacción en la blockchain. Esta dirección representa
- to: Es la dirección de la cuenta que recibe los fondos o activos en una transacción en la blockchain. Esta dirección puede pertenecer a otra cuenta de usuario o a un contrato inteligente.
- gas: Es una unidad que mide la cantidad de trabajo computacional necesario para ejecutar operaciones en la blockchain de Ethereum. Cada operación
- gasPrice: Es el costo por unidad de gas en una transacción en la blockchain de Ethereum. El gasPrice se expresa en gwei (una denominación de ether) y determina cuánto está dispuesto a pagar el remitente por cada unidad de gas consumida durante la
- gasUsed: Es la cantidad total de gas que se ha consumido para ejecutar una transacción o un conjunto de operaciones en la blockchain de Ethereum. Este valor indica cuánta capacidad computacional se ha utilizado para completar la transacción.
- cumulativeGasUsed: Es la cantidad total de gas que se ha consumido en un bloque específico de la blockchain de Ethereum hasta el momento en que se incluye una transacción particular. Este valor es acumulativo y refleja el gas utilizado por todas las transacciones anteriores en ese bloque, incluyendo la transacción actual.
- Web3.js: Es una biblioteca de JavaScript que permite a los desarrolladores interactuar con la blockchain de Ethereum. Proporciona una interfaz para enviar transacciones, leer datos de contratos inteligentes y suscribirse a eventos en la red Ethereum.
- JSON-RPC: Es un protocolo de llamada a procedimientos remotos (RPC) que utiliza JSON (JavaScript Object Notation) para la comunicación entre un cliente y un servidor. En el contexto de blockchain, JSON-RPC se utiliza para interactuar con nodos de la red, permitiendo a los desarrolladores enviar solicitudes y recibir respuestas en formato JSON. la cuenta del usuario que envía la transacción. Esta dirección es esencial para identificar al remitente y verificar su saldo antes de procesar la transacción.
- tx receipt: Es un objeto que contiene información detallada sobre una transacción específica en la blockchain de Ethereum. El tx receipt se genera después de que una transacción ha sido procesada y minada en un bloque, y proporciona datos importantes como el estado de la transacción, el gas utilizado, los logs generados por eventos, y otros detalles relevantes.
- eventos logs: Son registros generados por contratos inteligentes en la blockchain de Ethereum cuando se emiten eventos durante la ejecución de una transacción. Estos logs contienen información sobre los eventos específicos que ocurrieron, incluyendo los parámetros asociados, y son almacenados en la blockchain para su posterior consulta y análisis.
