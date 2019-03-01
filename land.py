#!/usr/bin/env python
# -*- coding: utf-8 -*-

import json
import collections as cl
from web3 import Web3, HTTPProvider


f = open('sample.json', 'r')
json_dict = json.load(f)
json_dict2 = json.loads(json_dict)

f2 = open('sample.csv', 'w')
counts = len(json_dict2)
print(len(json_dict2))

try:
	for i in range(counts):
		if json_dict2[i]['event'] == "EthAddedToPool":
			try:
				#Jsonの項目をそれぞれ参照している
				f2.write("{},{},{}".format(json_dict2[i]['returnValues']['landType'],float(json_dict2[i]['returnValues']['value'])/10000000000000000/100,json_dict2[i]['transactionHash'])+'\n')
				#print("{},{},{}".format(json_dict2[i]['returnValues']['purchasedBy'],float(json_dict2[i]['returnValues']['soldPrice'])/10000000000000000/100,json_dict2[i]['transactionHash']))
			except:
				print("error")	
				break;
except:
	print("error!")
	f2.close()