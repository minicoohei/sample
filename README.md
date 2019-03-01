# sample

## まずやること


```
npm install
```


## 次

その上で infura.ioでAPIキーを取得して
event-wathc.jsの下記の部分をインフラのAPIKEを含んだURLに修正してください。

```
const Web3 = require('web3');

const url = 'https://mainnet.infura.io/v3/[インフラのAPIKEY]';
//InfuraのAPIキーを取得ください。https://infura.io/
```


そしたら、下記でとあるブロック〜とあるブロックまでのそのコントラクトが発行したEventを参照できます。

```
node event-watch.js 7264872 7283785
```

あとはJSONファイルを適当に分析するだけ。

```
python land.py 
```
