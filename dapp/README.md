# Introducción Dapp
- Una Dapp (aplicación descentralizada) es una aplicación que funciona en una red blockchain, permitiendo a los usuarios interactuar con contratos inteligentes y activos digitales sin necesidad de intermediarios.

## Ventajas de los Dapp
- Descentralización: No dependen de una autoridad central, lo que reduce el riesgo de censura y fallos.
- Transparencia: Las transacciones y operaciones son visibles para todos los participantes en la red.
- Seguridad: La naturaleza inmutable de la blockchain protege contra fraudes y manipulaciones.
- Propiedad del usuario: Los usuarios tienen control total sobre sus datos y activos digitales.

## Diferencias entre ERC-20 y ERC-721
- ERC-20 es un estándar para tokens fungibles, mientras que ERC-721 es para tokens no fungibles.
- ERC-20 permite la intercambiabilidad entre tokens, mientras que cada token ERC-721 es único y no intercambiable.
- ERC-721 no son divisibles, mientras que los tokens ERC-20 pueden ser divididos en unidades más pequeñas.

## Comandos básicos para interactuar con Dapp hardhat 3
- npm install : Instala las dependencias del proyecto definidas en package.json.
- npx hardhat : Muestra el menú de opciones disponibles en hardhat.
- npx hardhat node : Inicia una red local de Ethereum para pruebas y desarrollo.
- npx hardhat accounts : Muestra las cuentas disponibles en la red local.
- npx hardhat balance --account <dirección_de_cuenta> : Muestra el saldo de la cuenta especificada.
- npx hardhat clean : Limpia los archivos generados por compilaciones anteriores.
- npx hardhat compile : Compila los contratos inteligentes en el proyecto.
- npx hardhat test test/Main.ts : Ejecuta las pruebas definidas en el archivo Main.ts.
- npx hardhat ignition deploy ./ignition/modules/Main.ts --network hoodi : Despliega los contratos inteligentes en la red hoodi utilizando el módulo Main.ts.
- npx hardhat console --network hoodi : Abre una consola interactiva para interactuar con la red hoodi.

## Términos comunes
- fungibilidad: La capacidad de un activo para ser intercambiado por otro del mismo tipo y valor.
- token no fungible (NFT): Un activo digital único que representa la propiedad de un artículo específico, como arte, música o coleccionables.Definición: Un token no fungible (NFT) es un tipo especial de token criptográfico que representa un activo digital único y no intercambiable.
- contrato inteligente: Programas autoejecutables que se ejecutan en la blockchain y gestionan transacciones y acuerdos entre partes.
- blockchain: Una base de datos distribuida y descentralizada que registra transacciones de manera segura y transparente.
- dapp: Aplicación descentralizada que opera en una red blockchain.
- token: Un activo digital que representa un valor o derecho dentro de una blockchain.
- criptomoneda: Una moneda digital que utiliza criptografía.
- gas: La tarifa pagada para ejecutar transacciones y contratos inteligentes en una blockchain.
- wei: La unidad más pequeña de Ether, la criptomoneda de la red Ethereum.
- metamask: Una billetera digital y extensión de navegador que permite a los usuarios interactuar con aplicaciones descentralizadas en la red Ethereum.
- openzeppelin: Una biblioteca de contratos inteligentes reutilizables y auditados para desarrollar aplicaciones en Ethereum.