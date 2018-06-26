module.exports = {
  actList: {profile: 'The profile',user: 'The average user',business: 'marketmakers',businessman: 'The merchant',financial: 'Financial institutions',
    technology: 'Technical background',trend: 'The future trend', },
  bsvcInfo :'BSVC is based on "the future application of smart city".\n' +
  '\n' +
  'Main functions: collective-value exchange: it is an Internet of things block chain that assists high-quality ' +
  'enterprises in market value management and expansion, and creates a comprehensive range of everything',
  outline: {
    outlineInfo : 'The profile',
    introduce:' It is a distributed system, decentralized, and therefore very secure, with little possibility of system failure; Its technical details and source code are public and anyone can see them, so the system is fair and transparent. BSVC broke the monopoly of the traditional financial system on the market, just like shopping on the Internet overthrew the traditional retail industry.',
    participants:'System participants include',
    user: 'The average user',
    userIntroduce:'Can easily participate in the global transfer payment, currency exchange, cash withdrawal, the use process is very simple.',
    gateway:'The gateway',
    gatewayIntroduce:' The interface provider between BSVC system and real money, providing charging and withdrawing functions, can realize profit by means of service fee',
    marketmakers: 'marketmakers',
    marketmakersIntroduce:' The establishment of currency exchange channels between different gateways can be profitable through exchange rate differences'
  },
  marketmakers:{
    marketmakersInfo:'marketmakers',
    introduce:'Market maker is the main body to realize the gateway exchange of different currencies. They do this by trusting multiple gateways to exchange money between them. In the process of exchange, marketmakers make a profit by exchanging the difference. The process of using market makers is basically the same as that of ordinary users. The only difference is that market makers must trust multiple gateways for currency exchange between them.',
    user: 'The average user',
    userIntroduce:'Marketmakers on the premise of complete function of ordinary users (registration, trust different gateway), in the wallet "currency exchange" menu, can be generated containing different currency exchanges between the total price, quantity, and offers (quotation). BSVC\'s matching system will automatically select the best OFFER price to complete the transaction.',
    scenarios:'Application scenarios',
    scenariosntroduce:'Marketmakers David trust the CNY gateway at the same time, the USD gateway marketmakers David in "currency exchange" menu, complete 1 USD = 6.5 CNY OFFER (quotation), when the user wants to use CNY exchange USD, and willing to receive 6.5 CNY for 1 USD, the system will automatically set, complete the transaction. In this way, market-maker David can earn a higher exchange rate difference than the normal exchange rate (1 USD to 6.2CNY).'
  },
  merchants:{
    merchantsInfo: 'merchants',
    introduce:' By using BSVC wallets, businesses can pay and receive payments to users around the world. In any place with Internet, users can choose by BSVC purse to complete the payment and transfer, for merchants, will face is a global users, and can greatly reduce the cost of collection.' ,
    introduceExample: 'For example, foreign trade merchants with traditional payment via PAYPAL or western union international transfer, such as having a large trading PAYPAL fee (3.9% of the total + $0.3), when the PAYPAL withdrawal will also charge a single withdrawal fee of $35), PAYPAL payment at the same time, there are geographical limitations (can only be used in PAYPAL payment). International transfers are generally expensive and slow to arrive.' ,
    introducecenter:'Compared with the traditional merchant collection mode, BSVC system has great advantages:',
    transfer:'The transfer confirmation can be completed in a very short time (20 seconds under normal circumstances)',
    fee:'A very low fee',
    internet:'Transfers can be made where there is an Internet connection, and they can be made available to customers around the world'
  }
  ,
  financial:{
    financial:'Financial institutions',
    introduce: 'BSVC enables institutions to provide superior banking service experience with less time and lower costs. For the Banks, for example, with the real-time settlement of infrastructure improvement BSVC, Banks will provide its customers with BSVC product with instant international remittance, bank for international settlements and provide other services.',
    financialIntroduceOne:'Financial institutions are usually gateways that can set rates and charge a fee per transfer transaction',
    financialIntroduceTwoL:'Financial institutions are usually gateways that can set rates and charge a fee per transfer transaction',
  },
  technical:{
    TechnicalBackground:'Technical background',
    introduce:'The BSVC system based on the RTXP protocol is a large distributed currency trading network that allows independent systems to be interconnected like mail systems. The BSVC system, like email, is ownerless and has no central manager. Distributed servers running open source programs are the core of BSVC systems. At its core, BSVC systems use distributed databases to manage information including user accounts, balances, and transaction entries. These records exist in the database, and the BSVC system is called the public ledger. Unlike central and private bank general ledger, the BSVC system\'s database is accessible across the network to all users. It has no central operator and no single point failure.\n' +
    '\n' +
    'Each distributed server stores a copy of the current overall ledger. Therefore, users can access the Shared ledger and view records of all activities on the BSVC network through this distributed network server. The server USES public-private key cryptography to verify that a transaction is valid. Just as in a traditional bank check transaction, a user has to sign his or her own identity, every transaction in the network is signed with a unique electronic signature. The server of BSVC network always verifies the validity of the signature mathematically before adding a transaction to the Shared ledger.',
    introduceContentOne:'BSVC is completely open source, completely open to the public, transparent',
    introduceContentTwo:'Users can view every transaction on the BSVC network',
    introduceinfo:'Developers around the world can use the BSVC API to develop applications',
  },
  user: {
    userInfo: 'The average user',
    introduce: 'For ordinary users, BSVC is an Internet financial system, which can exchange, pay and transfer global currencies quickly and cheaply! On the BSVC lab\'s official website (http://bsvcweb.com/#/), there is an introduction to the functions of ordinary users and a detailed help manual.',
    participant: 'System participants include',
    pay: 'Remittance or payment',
    payInfo: 'Trust the gateway of two currencies, then in the "currency exchange" function, according to the system prompt to place orders, buy and sell currencies, to achieve the exchange function.',
    currency: 'In foreign currency',
    currencyInfo: 'Using BSVC systems transfer function, collection address and the amount of money transfer, if not the same kind of currency, the system will automatically, the exchange rate for American currency to help users choose the best user recognition, the exchange rate can be paid immediately.',
    gateway: 'The gateway',
    gatewayInfo: 'Gateway is the interface provider between BSVC system and real money, providing users with charging and withdrawing functions. Gateway implementation savings into the BSVC network, your deposits into the BSVC The wallet; It is also the gateway that puts your cash in your bank account.',
  }
  };

